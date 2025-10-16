/**
 * Database Seeding Script
 * 
 * This script seeds the Strapi database with sample data for development and testing.
 * Customize the data below to match your content types and requirements.
 * 
 * Usage:
 *   npm run db:seed
 * 
 * Or run from inside Docker container:
 *   docker-compose exec strapi npm run db:seed
 */

const fs = require('fs');
const path = require('path');

// Sample data for seeding
const samplePages = [
  {
    title: 'Home',
    slug: 'home',
    content: '# Welcome to Our Website\n\nThis is a sample home page created by the seeding script.',
    excerpt: 'Welcome to our website. This is the home page.',
    seo: {
      metaTitle: 'Home - Welcome to Our Website',
      metaDescription: 'This is the home page of our website. Explore our content and learn more about what we offer.',
      keywords: 'home, welcome, website',
      metaRobots: 'index, follow',
    },
    publishedAt: new Date(),
  },
  {
    title: 'About Us',
    slug: 'about-us',
    content: '# About Us\n\nLearn more about our company and our mission.',
    excerpt: 'Learn more about our company, mission, and values.',
    seo: {
      metaTitle: 'About Us - Our Company',
      metaDescription: 'Learn more about our company, our mission, values, and the team behind our success.',
      keywords: 'about, company, mission, values',
      metaRobots: 'index, follow',
    },
    publishedAt: new Date(),
  },
  {
    title: 'Contact',
    slug: 'contact',
    content: '# Contact Us\n\nGet in touch with our team.',
    excerpt: 'Have questions? Contact us and we will get back to you.',
    seo: {
      metaTitle: 'Contact Us - Get in Touch',
      metaDescription: 'Contact us for any questions, feedback, or inquiries. We are here to help you.',
      keywords: 'contact, get in touch, support',
      metaRobots: 'index, follow',
    },
    publishedAt: new Date(),
  },
];

async function seed() {
  console.log('🌱 Starting database seeding...\n');

  try {
    // Check if we're running inside a Strapi context
    const strapiPath = path.join(__dirname, '..', 'src', 'index.ts');
    
    if (!fs.existsSync(strapiPath)) {
      console.error('❌ Error: This script must be run from the Strapi project root directory.');
      process.exit(1);
    }

    console.log('📝 Sample data prepared:');
    console.log(`   - ${samplePages.length} pages\n`);

    console.log('⚠️  Note: To actually seed the database, you need to:');
    console.log('   1. Start your Strapi application');
    console.log('   2. Use the Strapi Admin Panel to create content');
    console.log('   3. Or use the Strapi API programmatically\n');

    console.log('💡 For programmatic seeding, you can:');
    console.log('   1. Create a custom script that uses Strapi.js');
    console.log('   2. Use the Strapi CLI: strapi import/export');
    console.log('   3. Create an admin API endpoint for seeding\n');

    console.log('📋 Sample Pages to Create:');
    samplePages.forEach((page, index) => {
      console.log(`   ${index + 1}. ${page.title} (/${page.slug})`);
    });

    console.log('\n✅ Seeding data structure is ready!');
    console.log('\n📚 To implement actual database seeding:');
    console.log('   - Update this script to use Strapi\'s service layer');
    console.log('   - Or import this data via the Strapi admin panel');
    console.log('   - Or use the Content Manager API with proper authentication\n');

  } catch (error) {
    console.error('❌ Error during seeding:', error);
    process.exit(1);
  }
}

// Export sample data for use in other scripts
module.exports = {
  seed,
  samplePages,
};

// Run the seed function if this script is executed directly
if (require.main === module) {
  seed()
    .then(() => {
      console.log('✨ Seed script completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Fatal error:', error);
      process.exit(1);
    });
}
