# 3W-Pvt-Ltd

**Project Title:**
**Dynamic Leaderboard System with Random Points and Real-Time Ranking**

**Description:**
This project is a full-stack web application built using **ReactJS (frontend), Node.js + Express (backend), and MongoDB (database)** that manages a dynamic leaderboard. It allows users to be added, claim random points, and see live rankings update instantly.

---

### **Key Features**

1. **User Management**

   * Pre-loaded with 10 default users.
   * Ability to add new users dynamically (stored in MongoDB).
   * Each user has an automatically assigned **unique avatar** (via DiceBear API).

2. **Claim Points System**

   * Users can select their name and click "Claim Points" to receive random points between 1–10.
   * Points are saved in MongoDB and reflected in the leaderboard immediately.
   * A **history collection** records every point claim (user, points, timestamp).

3. **Dynamic Leaderboard**

   * Users are sorted in **real time by total points**.
   * Shows **rank, name, avatar, and total points**.
   * Smooth animations and hover effects for a modern UI.

4. **UI & UX Enhancements**

   * Attractive responsive layout.
   * Animations on buttons, headings, and row hovers.
   * Soft background colors, shadows, and transitions.

5. **Scalable Architecture**

   * REST APIs for user creation, point claims, and leaderboard retrieval.
   * Clean folder structure and reusable components.

---

### **Technologies Used**

* **Frontend:** ReactJS, CSS, Framer Motion (animations)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose)
* **Tools:** Thunder Client/Postman for API testing

---
