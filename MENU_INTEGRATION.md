# Rio Cafe Menu Integration Guide

## Overview
This guide explains how to integrate your promotional Rio Cafe menu images into the website. The MenuSection component has been updated to showcase your menu items with proper pricing, descriptions, and category filtering.

## What's Been Implemented

### 1. Enhanced MenuSection Component
- **Location**: `src/components/sections/menu-section.tsx`
- **Features**: 
  - Category filtering (All Items, Main Dishes, Desserts, Drinks, Soups)
  - Responsive grid layout
  - Hover effects and animations
  - "Order Now" buttons for each item
  - Featured item highlighting
  - Price display overlay

### 2. Menu Items Structure
The component now includes 12 menu items organized by category:

#### Main Dishes
- Super Delicious Burger ($12.99) - Featured item
- Rio Special Crispy Chicken Burger ($11.99)
- Special Pizza ($18.99)
- Kochchi Sausage Bun ($4.99)
- Jumbo Sausage Bun ($6.99)

#### Desserts
- Chocolate Cake ($7.99)
- Chocolate Glazed Donut ($3.99)

#### Drinks
- Chocolate Milkshake ($5.99)
- Iced Milk Coffee ($4.99)
- Wood Apple Juice ($3.99)
- Bubble Tea ($4.99)

#### Soups
- Soup Selection ($8.99) - Three varieties

## How to Add Your Images

### Step 1: Replace Placeholder Files
The following placeholder files have been created in `src/assets/menu/`:

```
src/assets/menu/
├── riocafechocolatecake.jpg    # Chocolate Cake
├── riocafepizza.jpg            # Special Pizza
├── riocafeburgur.jpg           # Super Delicious Burger
├── riocafedounut.jpg           # Chocolate Glazed Donut
├── riocafejuice8.jpg           # Chocolate Milkshake
├── juice7.jpg                  # Wood Apple Juice
├── juice5.jpg                  # Bubble Tea
├── bun7.jpg                    # Rio Special Crispy Chicken Burger
├── bun6.jpg                    # Kochchi Sausage Bun
├── bun5.jpg                    # Jumbo Sausage Bun
├── riocafeicedmilkcoffee.jpg   # Iced Milk Coffee
└── riocafesoup.jpg             # Soup Selection
```

**Replace each placeholder file with your actual promotional image.**

### Step 2: Image Requirements
- **Format**: JPG/JPEG recommended for web
- **Dimensions**: Minimum 400x300px (the component displays at h-48 = 192px height)
- **File Size**: Optimize for web (under 200KB per image recommended)
- **Quality**: High-quality promotional images that showcase your food

### Step 3: Verify Integration
After replacing the images:
1. The development server should automatically reload
2. Navigate to the homepage and scroll to the menu section
3. You should see your images displayed with the menu items
4. Test the category filtering buttons
5. Verify hover effects and "Order Now" buttons work

## Customization Options

### 1. Update Menu Items
To modify menu items, edit the `menuItems` array in `src/components/sections/menu-section.tsx`:

```typescript
const menuItems = [
  {
    id: 1,
    title: "Your Item Name",
    description: "Your description here",
    price: "$X.99",
    imageUrl: yourImageImport,
    category: "main", // or "desserts", "drinks", "soups"
    featured: true // Optional: adds a "Featured" badge
  },
  // ... more items
];
```

### 2. Add New Categories
To add new categories, update the `categories` array:

```typescript
const categories = [
  { id: "all", name: "All Items" },
  { id: "main", name: "Main Dishes" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
  { id: "soups", name: "Soups" },
  { id: "newcategory", name: "New Category" } // Add this
];
```

### 3. Modify Styling
The component uses Tailwind CSS classes. Key styling areas:
- **Grid Layout**: `grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- **Image Height**: `h-48` (change to `h-64` for taller images)
- **Card Styling**: Uses `GlassCard` component with hover effects
- **Colors**: Uses your theme colors (`primary`, `accent`, `muted-foreground`)

## Troubleshooting

### Common Issues

1. **Images Not Loading**
   - Check file paths in `src/assets/menu/`
   - Verify image filenames match exactly (case-sensitive)
   - Ensure images are valid JPG/JPEG files

2. **Build Errors**
   - Run `npm run build` to check for TypeScript errors
   - Verify all image imports are correct
   - Check that all required dependencies are installed

3. **Styling Issues**
   - Inspect browser dev tools for CSS conflicts
   - Verify Tailwind CSS is properly configured
   - Check that `GlassCard` component is available

### Performance Tips

1. **Image Optimization**
   - Use WebP format for better compression
   - Implement lazy loading for large menus
   - Consider using `next/image` or similar for production

2. **Code Splitting**
   - The build warning about chunk size can be addressed with dynamic imports
   - Consider lazy-loading the MenuSection component

## Next Steps

After successfully integrating your images:

1. **Test Responsiveness**: Verify the menu looks good on mobile, tablet, and desktop
2. **Update Content**: Modify descriptions, prices, and item names as needed
3. **Add Functionality**: Consider adding:
   - Shopping cart integration
   - Online ordering system
   - Nutritional information
   - Allergen warnings
   - Seasonal menu highlighting

## Support

If you encounter any issues:
1. Check the browser console for JavaScript errors
2. Verify all image files are properly placed
3. Ensure the development server is running (`npm run dev`)
4. Check that all dependencies are installed (`npm install`)

The menu section is now fully integrated and ready for your promotional images! 