export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME || 'Gradeup',
  logo: process.env.NEXT_PUBLIC_APP_LOGO || '/app_logo.avif',
  title: process.env.NEXT_PUBLIC_APP_TITLE || 'Gradeup - Courses & Digital Products',
  description:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    'Learn Advanced Google Analytics 4, Digital Marketing, and more with live courses.',
};

export default siteConfig;
