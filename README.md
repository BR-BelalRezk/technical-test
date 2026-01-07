# Frontend Technical Test – Next.js

Thank you for the opportunity to work on this technical challenge. This repository contains my submission for the Frontend Technical Test, with a strong focus on **authentication flow, API integration, and adherence to modern development best practices**.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui (Radix UI primitives)
- **Forms & Validation:** React Hook Form + Zod
- **State Management:** Zustand
- **API Handling:** Axios
- **UI & UX Enhancements:** Motion, Lenis, Sonner
- **Icons:** Lucide React
- **Package Manager:** pnpm

---

## 📦 Main Dependencies

- `next`, `react`, `typescript`
- `axios` – centralized API layer
- `react-hook-form`, `zod` – form handling and validation
- `zustand` – lightweight global state
- `@radix-ui/*` – accessible UI primitives (via shadcn/ui)
- `tailwindcss`, `clsx`, `tailwind-merge`
- `sonner` – toast notifications
- `motion`, `lenis` – smooth animations and transitions
- `lucide-react` – icon library

---

## 🔐 Authentication Flow

The following authentication flows have been fully implemented and integrated with the provided APIs:

### **Register**

- Full Name
- Email
- Password (with confirmation)
- Phone Number
- Country Code

### **Login**

- Email
- Password

### **Account Verification**

- Verification code input
- Test verification code: **`123456`**

### **Token Handling**

- Authentication token is stored in `localStorage`
- Authenticated users are redirected to the home page
- Unauthenticated users are redirected to the login page

---

## ⚙️ Getting Started (Local Setup)

### **1. Clone the Repository**

```bash
git clone https://github.com/BR-BelalRezk/technical-test.git
cd technical-test
```

### **2. Install Dependencies**

```bash
pnpm install
```

### **3. Configure Environment Variables**

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_BASE_URL=https://tinytales.trendline.marketing/api
```

### **4. Run Development Server**

```bash
pnpm dev
```

The application will be available at **`http://localhost:3000`**

### **5. Build for Production**

```bash
pnpm build
pnpm start
```

---

## 🎨 UI Implementation Note

Due to the time constraint of this task, my primary focus was placed on:

- ✅ **Complete and correct API integration**
- ✅ **Authentication logic and flow**
- ✅ **Clean, scalable architecture**
- ✅ **Code organization and maintainability**

The UI foundation has been implemented using **shadcn/ui** and **Tailwind CSS**, providing a professional and functional interface. While the Figma design implementation was not fully finalized within the time limit, the existing foundation allows for straightforward completion of any remaining visual details if required.

---

## 🛠️ Development Environment

- **IDE:** Antigravity IDE
- **Node.js:** Latest LTS recommended
- **Package Manager:** pnpm

---

## 🌍 Links

**GitHub Repository:**  
[https://github.com/BR-BelalRezk/technical-test](https://github.com/BR-BelalRezk/technical-test)

**Live Demo (Vercel):**  
[https://technical-test-three-smoky.vercel.app](https://technical-test-three-smoky.vercel.app)

---

## 📝 Summary

This project was completed with careful attention to:

- **API Integration:** All authentication endpoints (register, login, verify, resend code) are fully functional
- **Authentication Flow:** Complete implementation of user registration, login, and email verification
- **Security:** Proper token management and secure storage practices
- **Code Quality:** TypeScript for type safety, clean architecture, and maintainable code structure
- **User Experience:** Form validation, error handling, loading states, and helpful toast notifications

I appreciate the opportunity to demonstrate my skills through this technical test. Should you have any questions or require clarifications, please feel free to reach out.

---

**Built with care using Next.js, TypeScript, and modern web development best practices.**
