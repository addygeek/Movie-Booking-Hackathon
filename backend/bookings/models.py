
from djongo import models
from movie.models import Movie

class Booking(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user_name = models.CharField(max_length=255)
    booking_date = models.DateTimeField(auto_now_add=True)
    seats_booked = models.PositiveIntegerField()
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f"Booking by {self.user_name} for {self.movie.title}"

    class Meta:
        verbose_name = 'Booking'
        verbose_name_plural = 'Bookings'
