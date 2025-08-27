

# PlanEase – Digital Planner Website

PlanEase is a modern landing page for a digital planner product. The design emphasizes clarity, responsiveness, and interactivity to create a polished user experience that feels both functional and delightful.

##  Design Approaches

### 1. **Theme & Visual Language**

* **Dark-first design** with optional light mode for accessibility and personalization.
* **Systematic color variables** (`--bg`, `--surface`, `--primary`, etc.) defined in `:root` for consistent theming across dark and light modes.
* **Soft shadows & gradients** add depth while maintaining a clean and modern look.
* **Rounded corners & subtle borders** give the UI a friendly, approachable feel.

### 2. **Typography & Layout**

* Uses the **Inter font family** for legibility and a professional aesthetic.
* **Fluid type scales** with `clamp()` ensure text adapts gracefully across breakpoints.
* Content is wrapped in a **1200px max-width container**, centered for balance on wide screens.
* **Grid-based layouts** (CSS Grid + Flexbox) used in features, pricing, and footer sections for structured readability.

### 3. **Navigation & Header**

* **Sticky header** with backdrop blur for clarity and quick access to navigation.
* **Mobile-first responsive menu** with a hamburger toggle, ensuring usability on all devices.
* Smooth scroll + shadow on scroll adds polish and context.

### 4. **Hero Section**

* Gradient background with **layered mockup illustration** communicates the product visually.
* **Bold headline, supportive subtext, and strong CTAs** encourage quick user action.
* CTA buttons include a **ripple effect animation** for tactile feedback.

### 5. **Features & Cards**

* Features displayed in **interactive cards** with hover elevation effects.
* Each card uses an **icon block + headline + muted description** for quick scanning.
* Consistent padding and spacing create hierarchy and rhythm.

### 6. **Pricing Section**

* **Three-column pricing grid** with a highlighted "Recommended" plan.
* **Monthly/Yearly toggle switch** allows users to switch pricing dynamically.
* Uses accent badges, bold pricing typography, and checkmark feature lists for clarity.

### 7. **Testimonials**

* **Slider-based testimonial system** with avatars, text, roles, and smooth transitions.
* Includes **keyboard navigation** and **auto-play with pause on user interaction**.
* Avatars are circular with `object-fit: cover` for clean photo presentation.

### 8. **Footer**

* **Four-column responsive grid** for brand, contact info, navigation, and social links.
* Social icons styled with hover lift effects for interactivity.
* A centered **copyright bar** anchors the layout.

### 9. **Interactivity & Animations**

* **On-scroll reveal animations** (`IntersectionObserver`) fade in elements as they enter the viewport.
* **Hover and ripple effects** provide tactile feedback without overwhelming.
* **Mobile menu lock scroll** prevents background scrolling for smoother UX.

### 10. **Accessibility**

* Semantic HTML (`nav`, `header`, `footer`, `section`) improves screen reader compatibility.
* Buttons and links include **aria-labels** for assistive technologies.
* High contrast color system ensures readability in both light and dark modes.
* **Keyboard navigation support** for the testimonial slider.

---

##  Tech Stack

* **HTML5 + CSS3 + Vanilla JavaScript**
* No external JS libraries – everything is lightweight and dependency-free.
* **Google Fonts (Inter)** for typography.

---

##  Responsiveness

* Breakpoints at **980px**, **768px**, and **560px** for optimal experience on desktop, tablet, and mobile.
* Content reflows into **single-column layouts** on small screens.
* Buttons expand to **full width** for better mobile usability.

---

##  Key UX Principles Applied

* **Clarity over clutter** – minimal, goal-driven design.
* **Consistency in spacing, color, and typography** for predictable patterns.
* **Progressive enhancement** – site works without JS, but interactions add delight.
* **Fast, lightweight build** without unnecessary dependencies.

