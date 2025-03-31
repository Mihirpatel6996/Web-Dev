# FastAPI Learning Journey
## My Learning Notes
- [FastAPI Learning Notes](https://docs.google.com/document/d/1Y6dOtwnon3vZTXHdqyq2nT6Wi5RLZUlan1OaV7o0zaA/edit?usp=sharing)
## Repositories
### 1. FastAPI Basics**Repository:** [fastapi-basics](https://github.com/Mihirpatel6996/fastapi-basics)
**Topics Covered:**
- Path Operations  - HTTP methods (GET, POST, etc.)
  - Decorators: @app.get(), @app.post()- Path Parameters
  - Three main types:    1. Path Parameters
    2. Query Parameters    3. Request Body
- Query Parameters  - Passed after ? in URL
- Request Body  - Using Pydantic models for request validation
### 2. FastAPI Setup
**Repository:** [fastapi-setup](https://github.com/Mihirpatel6996/fastapi-setup)
### 3. FastAPI Blog Project**Repository:** [fastapi-blog-project](https://github.com/Mihirpatel6996/fastapi-blog-project)
**Features:**
1. Authentication   - JWT (JSON Web Token) based authentication
   - Secure password hashing using bcrypt   - Token expiration (30 minutes default)
   - Protected routes requiring authentication
2. User Management   - User registration
   - User profile retrieval   - View user's blogs
   - Password encryption
3. Blog Operations   - Create blog posts (authenticated)
   - Read blog posts   - Update blog posts
   - Delete blog posts   - View blog creator details
4. Database
   - SQLite database   - SQLAlchemy ORM
   - Relationship mapping between Users and Blogs
   - Foreign key constraints




























