
from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('movie', 'user_name', 'booking_date', 'seats_booked', 'total_amount')
