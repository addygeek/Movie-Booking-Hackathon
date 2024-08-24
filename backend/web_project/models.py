from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.utils.timezone import now

class Movies(models.Model):
    sno = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    director = models.CharField(max_length=25)
    slug = models.CharField(max_length=130)
    ratings = models.IntegerField(default=0)
    releasedate = models.DateTimeField(blank=True)
    description = models.TextField()

    def __str__(self):
        return self.title

class Theatres(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    screens = models.IntegerField(default=1)
    seats = models.IntegerField(default=1)
    seatallocation = models.JSONField()

    def __str__(self):
        return f"{self.name} - {self.location}"

class Showtimes(models.Model):
    theatre = models.ForeignKey(Theatres, on_delete=models.CASCADE, related_name='showtimes')
    movie = models.ForeignKey(Movies, on_delete=models.CASCADE, related_name='showtimes')
    showtime = models.DateTimeField()

    def __str__(self):
        return f"{self.showtime} of {self.movie.title}"

class Tickets(models.Model):
    user = models.ForeignKey('CustomUser', on_delete=models.CASCADE, related_name='tickets')
    movie = models.ForeignKey(Movies, on_delete=models.CASCADE)
    showtime = models.ForeignKey(Showtimes, on_delete=models.CASCADE)
    purchased_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Ticket for {self.movie.title} on {self.showtime.showtime} by {self.user.username}"

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    birthdate = models.DateField(blank=True, null=True)
    email = models.EmailField(_("Email address"), max_length=254)
    watch_history = models.ManyToManyField(Movies, blank=True, related_name='watched_by')
    my_tickets = models.ManyToManyField(Tickets, blank=True, related_name='owned_by')

    # Override groups and user_permissions to avoid conflicts
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',  # Changed from 'user_set' to avoid conflict
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_set',  # Changed from 'user_set' to avoid conflict
        blank=True
    )

    def __str__(self):
        return self.username
