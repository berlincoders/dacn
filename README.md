This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Steps to follow up
-  Install Swiper
```bash
npm install swiper
# or
yarn add swiper
```
-  Create your Swiper component
-  Use It in a Page
## Do you have an error?
-  Check Your package.json, make sure Swiper is installed.

## swiper modifications
-  Control the slider height using Tailwind.
-  Make it responsive (so it looks good on all screen sizes).
-  Slow down the autoplay so it doesn’t feel too fast.
-  Ensure images fill the Swiper correctly using object-cover and size utilities.
-  Responsive captions or text on top of the slider
```bash
     <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src="/images/slide1.webp"
            alt="Slide 1"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-semibold text-center px-4">
              Welcome to Our World 🌍
            </h2>
          </div>
        </div>
      </SwiperSlide>
```
## "active link highlighting" effect
- Use usePathname from next/navigation,This [hook](https://react.dev/reference/react/hooks) tells you what the current URL path is.
- We loop through all your nav links and conditionally apply classes based on whether the current path matches
-If it's active, we apply text-yellow-400 bg-gray-800,Otherwise, it stays white with a hover effect



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
