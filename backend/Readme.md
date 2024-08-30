# 🎥 Movie Booking System Backend

Welcome to the **Movie Booking System Backend**! This is a comprehensive backend solution for managing movie data and bookings for a cinema theatre. Built with **Django** and **MongoDB** (using **Djongo**), this project provides a robust API for handling various operations related to movies and their bookings.

## 🌟 Features

- **Movie Management**: 
  - Add, update, delete, and retrieve information about movies, including title, description, release date, genre, rating, and director details.
  
- **Booking System**:
  - Seamlessly handle movie bookings, including user details, number of seats booked, and the total amount paid.
  
- **Admin Interface**:
  - Manage movies and bookings through the Django admin panel with an intuitive interface.
  
- **RESTful API**:
  - Expose a fully functional API for interacting with the movie and booking data, allowing easy integration with frontend applications.

## 🛠️ Tech Stack

- **Django 5.1**: The primary web framework used to build the backend.
- **Djongo**: A connector for Django that enables MongoDB to be used as the database backend.
- **MongoDB**: The NoSQL database used to store movie and booking data.
- **Django REST Framework**: Used to build the RESTful APIs.

## 📂 Project Structure

Here's an overview of the project structure:

```
backend/
├── bookings/
│   ├── admin.py
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
├── movie/
│   ├── admin.py
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
├── web_project/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
├── db.sqlite3
├── manage.py
├── backend.md
```

- **`bookings/`**: Contains all the logic related to managing movie bookings.
- **`movie/`**: Contains all the logic related to managing movies.
- **`web_project/`**: Contains project-wide settings and configurations.
- **`db.sqlite3`**: The default database file (used during development).
- **`manage.py`**: A command-line utility that lets you interact with this Django project.
- **`backend.md`**: A placeholder file (can be removed or repurposed).

## 🚀 Installation

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movie-booking-backend.git
cd movie-booking-backend
```

### 2. Set Up a Virtual Environment

It's recommended to use a virtual environment to manage dependencies:

```bash
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate
```

### 3. Install Dependencies

Install the necessary Python packages using `pip`:

```bash
pip install -r requirements.txt
```

### 4. Configure MongoDB

Ensure MongoDB is installed and running on your local machine or a remote server. Update the `DATABASES` setting in `web_project/settings.py` if necessary.

### 5. Apply Migrations

Run the following commands to apply database migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Create a Superuser (Admin)

Create an admin user to access the Django admin panel:

```bash
python manage.py createsuperuser
```

### 7. Run the Development Server

Start the Django development server:

```bash
python manage.py runserver
```

## 📝 Usage

### 1. Admin Panel

Access the Django admin panel at `http://127.0.0.1:8000/admin/`. Use the superuser credentials to log in. Here, you can manage movies and bookings easily.

### 2. API Endpoints

You can interact with the API using tools like Postman or directly via your frontend. Here are the primary endpoints:

- **Movies**: `http://127.0.0.1:8000/api/movies/`
  - GET: Retrieve a list of all movies.
  - POST: Create a new movie.
  - PUT/PATCH: Update an existing movie.
  - DELETE: Delete a movie.

- **Bookings**: `http://127.0.0.1:8000/api/bookings/`
  - GET: Retrieve a list of all bookings.
  - POST: Create a new booking.
  - PUT/PATCH: Update an existing booking.
  - DELETE: Cancel a booking.

### 3. Example API Requests

- **Retrieve all movies**:

  ```bash
  GET /api/movies/
  ```

- **Create a new movie**:

  ```bash
  POST /api/movies/
  {
      "title": "Inception",
      "description": "A mind-bending thriller",
      "release_date": "2010-07-16",
      "genre": "Sci-Fi",
      "rating": 8.8,
      "director": "Christopher Nolan"
  }
  ```

- **Retrieve all bookings**:

  ```bash
  GET /api/bookings/
  ```

- **Create a new booking**:

  ```bash
  POST /api/bookings/
  {
      "movie": 1,
      "user_name": "John Doe",
      "seats_booked": 2,
      "total_amount": 20.00
  }
  ```

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, feel free to submit a pull request or open an issue.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## 📧 Contact

If you have any questions or suggestions, feel free to contact me us:
---

Thank you for checking out the **Movie Booking System Backend**! Enjoy coding! 🎉
