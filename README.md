# Career Guidance System

The Career Guidance System is a web-based platform designed to assist students in exploring career options, providing comprehensive information on various career paths, personalized career suggestions, educational resources, and administrative tools for managing user accounts and system content.

## Features

- **User Management:**
  - Secure registration and login for students, counselors, and administrators.
  - Profile management for users to update personal information, preferences, and career interests.
  - Role-based access control with different access levels and functionalities based on user roles.

- **Career Information Database:**
  - Detailed information on various careers, including job descriptions, required qualifications, job outlook, and pathways.
  - Search and filter options for users to find careers based on different criteria such as industry, education level, and salary range.
  - Career comparisons for users to make informed decisions.

- **Recommendation Engine:**
  - Personalized career suggestions based on users' profiles and assessment results.
  - Advanced algorithms to match users with careers that best fit their profiles.
  - Feedback mechanism for users to rate and provide feedback on career suggestions.

- **Report Generation:**
  - Customizable reports based on user data, assessment results, and career recommendations.
  - Reports available in various formats, including PDF and Excel, for easy sharing and printing.
  - Progress tracking with visual dashboards to track users' progress over time.

- **Educational Resources:**
  - Library of articles, guides, and tutorials on career planning, job search strategies, and professional development.

- **Administrative Tools:**
  - User management dashboard for administrators to manage user accounts, monitor activity, and assign roles.
  - Data analytics and reporting tools to analyze user data, system usage, and generate administrative reports.
  - Content management for administrators to update the career database, add new resources, and manage site content.
  - Feedback and support mechanisms for users to report issues, suggest features, and receive support.

## Setup Instructions

### Backend (Django)

1. Navigate to the `career_guidance_backend` directory.
2. Set up a virtual environment: `python -m venv venv`
3. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS/Linux: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Run migrations: `python manage.py migrate`
6. Start the development server: `python manage.py runserver`

### Frontend (React)

1. Navigate to the `career_guidance_frontend` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

