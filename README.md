# Next.js 15 Product Management App

A simple Next.js 15 application demonstrating **public and protected pages** with **NextAuth.js authentication**. Users can view products, see product details, and add new products after logging in.

---

## 🔗 Live Demo
[Live Site Link]

## 💻 Features

### 1. Landing Page (`/`)
- Navbar with navigation links
- Hero section with a call-to-action
- Product highlights
- Footer
- Publicly accessible (no authentication required)

### 2. Login Page (`/login`)
- Login using **Google OAuth** or credentials via **NextAuth.js**
- Redirects to `/products` after successful login

### 3. Product List Page (`/products`)
- Publicly accessible
- Fetches a list of products from a mock backend or API
- Each product displays:
  - Name
  - Description
  - Price
  - Details button linking to `/products/[id]`

### 4. Product Details Page (`/products/[id]`)
- Publicly accessible
- Shows full details of a selected product

### 5. Protected Page: Add Product (`/dashboard/add-product`)
- Accessible **only after login**
- Form to add a new product
- Stores product data in database via API
- Redirects unauthenticated users to `/login`

---

## ⚡ Optional Enhancements
- Loading spinner while submitting forms
- Toast notifications for successful product additions
- Light/Dark theme toggle

---

## 🛠 Technologies Used
- **Next.js 15** (App Router)  
- **NextAuth.js** for authentication  
- **React** & **Tailwind CSS** for UI  
- Route Handlers (`/api`) for backend operations  
- Mock database (JSON file or MongoDB) for product data  

---

## 🚀 Installation

1. **Clone the repository**
```bash

