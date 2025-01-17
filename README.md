<p align="center">
  <img src="https://github.com/user-attachments/assets/2c62a0e8-00cc-42c0-9d44-14e1290341d2" alt="logo" width="500" />
</p>
Hall of Stats is a comprehensive MLB statistics lookup application that allows users to explore baseball statistics spanning over the past two centuries. Whether you're interested in hitters, pitchers, or teams, this app provides detailed data and insights.

## Features

### 1. **Hitters**
- Search for hitters by name to view their complete career statistics.
- Detailed breakdown of stats such as:
  - Games played
  - Hits, home runs, RBIs
  - Batting averages, slugging percentages, and more.

### 2. **Pitchers**
- Lookup pitchers by name to access their performance data.
- Comprehensive metrics including:
  - Wins, losses, and saves
  - ERA, strikeouts, innings pitched, and more.

### 3. **Teams**
- Search for teams by name to explore their season-by-season statistics.
- Data includes:
  - Games played, wins, losses
  - Runs scored, runs allowed
  - Attendance, playoff performance, and more.
  - 

---

## Stack

### Backend
- **Language**: Java
- **Framework**: Spring Boot
- **Database**: PostgreSQL
- **API**: RESTful API for data retrieval and search functionality

### Frontend
- **Framework**: React (with Vite for fast development)
- **Styling**: CSS

---

## Installation

### Prerequisites
- Node.js and npm installed
- Java 17+ installed
- PostgreSQL database set up

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/hall-of-stats.git
   cd hall-of-stats
   ```
2. Navigate to the backend directory and build the application:
   ```bash
   ./mvnw spring-boot:run
   ```
3. Configure the PostgreSQL database:
   - Update the `application.properties` file with your database credentials:
     ```properties
     spring.datasource.url=jdbc:postgresql://localhost:5432/your_database_name
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```
4. Run the backend server:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the app at:
   ```
   http://localhost:5173
   ```

---

## Usage

1. **Home Page**
   - Navigate to the homepage to access buttons for hitters, pitchers, and teams.
   
2. **Search Functionality**
   - Use the search bar at the top of each page to search for specific players or teams.

3. **Dynamic Tables**
   - View results in a dynamically generated, scrollable table.
---

## Screenshots(coming soon)

---


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Major League Baseball for the inspiration and the data
- Open-source tools like React, Spring Boot, and PostgreSQL

