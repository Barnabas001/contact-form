# Contact Form React Component

A modern, responsive contact form built with React and CSS. Features comprehensive form validation, error handling, and a mobile-first responsive design.

## 🚀 Features

- **Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices
- **Form Validation** - Client-side validation with real-time error feedback
- **Modern UI** - Clean, professional design with smooth transitions
- **Accessibility** - Proper form labels, focus states, and keyboard navigation
- **Error Handling** - Visual error states with helpful error messages
- **Touch Friendly** - Optimized for mobile interactions

## 📱 Screenshots

### Desktop View
- Clean, centered layout with side-by-side form fields
- Professional color scheme with green accent colors
- Hover effects and smooth transitions

### Mobile View
- Stacked layout for optimal mobile experience
- Touch-friendly input sizes and spacing
- Responsive typography that scales appropriately

## 🛠️ Technologies Used

- **React** - Frontend framework with hooks for state management
- **CSS3** - Modern CSS with Flexbox and media queries
- **JavaScript (ES6+)** - Form validation and event handling

## 📋 Form Fields

The contact form includes the following fields:

1. **First Name*** - Required text input
2. **Last Name*** - Required text input  
3. **Email Address*** - Required email input with format validation
4. **Query Type*** - Required radio button selection (General Enquiry/Support Request)
5. **Message*** - Required textarea for user message
6. **Consent Checkbox*** - Required consent for contact

*Required fields are marked with asterisk

## ✅ Validation Features

### Client-Side Validation
- **Required Field Validation** - Ensures all mandatory fields are filled
- **Email Format Validation** - Validates proper email format using regex
- **Real-time Error Clearing** - Errors clear as user corrects input
- **Visual Error States** - Red borders and pink backgrounds for invalid fields

### Error Messages
- Context-specific error messages for each field type
- Professional, user-friendly error text
- Consistent styling across all error states

## 🎨 Design Features

### Color Scheme
- **Primary Background**: `hsl(148, 38%, 91%)` - Light mint green
- **Form Background**: `white` - Clean white form container
- **Text Color**: `hsl(187, 24%, 22%)` - Dark teal
- **Accent Color**: `hsl(169, 82%, 27%)` - Green for buttons and selected states
- **Error Color**: `hsl(0, 66%, 54%)` - Red for validation errors

### Typography
- **Font Family**: Arial, sans-serif
- **Responsive Font Sizes**: Scale from 12px (mobile) to 17px (desktop)
- **Font Weights**: 500 for labels, 600 for buttons

### Layout
- **Flexbox Layout** - Modern, flexible positioning
- **CSS Grid** - For mobile stacked layouts
- **Box Model** - Consistent box-sizing across all elements

## 📱 Responsive Breakpoints

```css

/* Standard Desktop */
/* Default styles apply */

/* Small Mobile */
@media (max-width: 480px) { /* Compact layout for tiny screens */ }
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd contact-form-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
contact-form-project/
├── src/
│   ├── App.js          # Main React component with form logic
│   ├── index.css       # Responsive CSS styles
│   └── index.js        # React app entry point
├── public/
│   └── index.html      # HTML template
├── package.json        # Project dependencies
└── README.md          # This file
```

## 💻 Code Architecture

### Component Structure
- **App Component** - Main container component
- **ContactForm Component** - Form logic and state management
- **Modular Design** - Clean separation of concerns

### State Management
```javascript
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  queryType: "",
  message: "",
  consent: false,
});

const [errors, setErrors] = useState({
  firstName: false,
  lastName: false,
  email: false,
  queryType: false,
  message: false,
  consent: false,
});
```

### Form Validation
- **Email Regex**: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- **Required Field Check**: `!field.trim()`
- **Real-time Validation**: Errors clear on input change

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

## 🔮 Future Enhancements

### Potential Improvements
- [ ] Form submission to backend API
- [ ] Email confirmation system
- [ ] File attachment support
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Advanced form analytics
- [ ] CAPTCHA integration
- [ ] Form progress indicator

### Backend Integration
```javascript
// Example API integration
const handleSubmit = async () => {
  if (validateForm()) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      // Handle response
    } catch (error) {
      // Handle error
    }
  }
};
```

## 🐛 Troubleshooting

### Common Issues
1. **Styles not applying**: Ensure CSS file is properly imported
2. **Form not submitting**: Check validation logic and console errors
3. **Responsive issues**: Verify viewport meta tag in HTML
4. **Input focus problems**: Check for CSS outline and focus styles

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Legacy Support**: IE 11+ (with polyfills)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Built with ❤️ using React and modern CSS**
