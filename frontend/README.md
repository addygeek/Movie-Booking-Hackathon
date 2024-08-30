# 🎬 Movie Booking System Frontend

Welcome to the **Movie Booking System Frontend**! This is the user-facing part of the Movie Booking System, providing an intuitive and seamless experience for users to browse movies, check showtimes, and book their seats online.

## 🌟 Features

- **Browse Movies**:
  - View a list of currently available movies, along with details like title, description, release date, genre, rating, and director.
  
- **Search Functionality**:
  - Quickly find movies by searching with keywords like title or genre.
  
- **Booking Interface**:
  - Book movie tickets by selecting the desired showtime, number of seats, and completing the booking process with a user-friendly interface.

- **Responsive Design**:
  - Optimized for both desktop and mobile devices, ensuring a smooth experience across all platforms.

- **Interactive UI**:
  - Dynamic elements and smooth transitions enhance the user experience, making movie selection and booking straightforward and enjoyable.

## 🛠️ Tech Stack

- **React.js**: The primary JavaScript library used to build the user interface.
- **Bootstrap**: A CSS framework for responsive design.
- **Axios**: A promise-based HTTP client for making API requests to the backend.
- **React Router**: For managing navigation and routing between different views.

## 📂 Project Structure

Here's an overview of the project structure:

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
├── README.md
```

- **`public/`**: Contains the HTML template and static assets.
- **`src/components/`**: Contains React components like the movie list, movie detail view, booking form, and navigation bar.
- **`src/pages/`**: Contains page components representing different views like the home page, movie detail page, and booking page.
- **`App.js`**: The root component that sets up routing and renders different pages.
- **`index.js`**: The entry point for the React application.

## 🚀 Installation

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movie-booking-frontend.git
cd movie-booking-frontend
```

### 2. Install Dependencies

Make sure you have Node.js installed. Then, install the necessary packages using npm:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory to store your environment variables. Add the following:

```bash
REACT_APP_API_BASE_URL=http://localhost:8000/api
```

Replace `http://localhost:8000/api` with the URL of your backend API if it's hosted elsewhere.

### 4. Run the Development Server

Start the React development server:

```bash
npm start
```

This will start the server and open the app in your default web browser. The app will automatically reload if you make changes to the code.

## 📝 Usage

### 1. Home Page

When you visit the home page (`http://localhost:3000/`), you'll see a list of all available movies. Each movie will display its title, genre, and rating.

### 2. Movie Detail Page

Click on any movie to view more details about it. You'll see a more comprehensive description, including the release date, director, and an option to book tickets.

### 3. Booking Page

Once you decide on a movie, click the "Book Now" button to proceed to the booking page. Here, you can select the number of seats, the showtime, and proceed to confirm your booking.

### 4. Navigation

Use the navigation bar to quickly move between different sections of the application, such as browsing movies or checking your bookings.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, feel free to submit a pull request or open an issue.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## 📧 Contact

If you have any questions or suggestions, feel free to contact me at:

---

Thank you for exploring the **Movie Booking System Frontend**! Enjoy your development journey! 🎉
