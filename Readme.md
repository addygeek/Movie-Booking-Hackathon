# 🎥 Movie Booking System 📽️

Welcome to the **Movie Booking System**! This project is a comprehensive web application that allows users to browse movies, check showtimes, and book tickets online. The system is built with a robust backend powered by Django and MongoDB, and a dynamic frontend using React.js, providing an exceptional user experience. 🎬

## 🌟 Key Features

### 🎦 Movie Management
- **Browse Movies**: Users can view a list of all available movies, complete with details like title, genre, rating, director, and release date.
- **Search Functionality**: Quickly find movies by searching with keywords like title, genre, or director.
- **Admin Control**: Admins can add, update, or delete movies from the system via a user-friendly interface.

### 🕒 Showtimes & Booking
- **Showtime Listings**: Users can view showtimes for each movie and select the most convenient option.
- **Real-Time Booking**: Book tickets in real-time, with immediate confirmation.
- **Seat Selection**: Choose preferred seats from the available options before booking.

### 🧑‍💻 User Management
- **User Registration & Login**: Secure user authentication and profile management.
- **Booking History**: Users can view their past bookings and upcoming shows.
- **Admin Dashboard**: Admins have access to a dashboard for managing movies, bookings, and users.

### 📱 Responsive Design
- **Mobile & Desktop**: Optimized for both mobile and desktop devices, ensuring a seamless experience across all platforms.
- **Interactive UI**: Smooth transitions and dynamic elements enhance user engagement.

## 🛠️ Tech Stack

### Backend
- **Django**: A high-level Python web framework that encourages rapid development and clean, pragmatic design.
- **MongoDB**: A NoSQL database used to store movie details, user data, and booking information.
- **Djongo**: A connector that allows Django to interact with MongoDB.

### Frontend
- **React.js**: A powerful JavaScript library for building user interfaces, especially single-page applications.
- **Axios**: A promise-based HTTP client for making requests to the backend API.
- **React Router**: For managing navigation and routing within the app.

### Others
- **Bootstrap**: A CSS framework used to create responsive and modern designs.
- **Git & GitHub**: Version control and collaboration.

## 📂 Project Structure

### Backend
```
backend/
├── bookings/
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   └── views.py
├── movie/
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   └── views.py
├── web_project/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
├── manage.py
├── db.sqlite3 (used temporarily)
├── backend.md
```

### Frontend
```
frontend/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── MovieList.js
│   │   ├── MovieDetail.js
│   │   ├── BookingForm.js
│   │   ├── Navbar.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── MoviePage.js
│   │   ├── BookingPage.js
│   ├── App.js
│   ├── index.js
├── package.json
```

## 🔧 Installation & Setup

### Backend

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/movie-booking-system.git
   cd movie-booking-system/backend
   ```

2. **Create a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set Up MongoDB**:
   - Make sure MongoDB is installed and running.
   - Update the `DATABASES` setting in `settings.py` if necessary:
     ```python
     DATABASES = {
         'default': {
             'ENGINE': 'djongo',
             'NAME': 'MovieApp',
         }
     }
     ```

5. **Run Migrations**:
   ```bash
   python manage.py migrate
   ```

6. **Start the Backend Server**:
   ```bash
   python manage.py runserver
   ```

### Frontend

1. **Navigate to the Frontend Directory**:
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory and add:
     ```bash
     REACT_APP_API_BASE_URL=http://localhost:8000/api
     ```

4. **Start the Frontend Server**:
   ```bash
   npm start
   ```

## 📝 Usage

### User Workflow

1. **Home Page**:
   - Browse available movies.
   - Use the search bar to find specific movies.

2. **Movie Detail Page**:
   - Click on a movie to view detailed information.
   - Proceed to book tickets.

3. **Booking Page**:
   - Select showtime and seat preferences.
   - Confirm booking.

4. **User Profile**:
   - Log in or sign up to manage bookings and view history.

### Admin Workflow

1. **Admin Dashboard**:
   - Access control over movies, bookings, and users.
   - Add, update, or delete movies.
   - Manage user accounts and view booking statistics.

## 🤝 Contributing

We welcome contributions! If you'd like to improve the project, feel free to fork the repository, make your changes, and submit a pull request. 

### How to Contribute

1. Fork the Project.
2. Create a Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit Your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

## 📧 Contact

If you have any questions, feedback, or suggestions, feel free to reach out:
-   **GitHub**: [addygeek](https://github.com/addygeek)
-   **GitHub**: [LincyBainiwal](https://github.com/LincyBainiwal)
-   **GitHub**: [Devansh-Kushwaha](https://github.com/Devansh-Kushwaha)
-   **GitHub**: [Kanvi Makwana](https://github.com/kanvimakwana)
