const https = require('https');
const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const directories = [
  'public/images',
  'public/images/testimonials',
  'public/images/avatars',
  'public/images/courses',
  'public/images/blog',
  'public/images/routes',
  'public/images/quiz',
  'public/images/success-stories'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Function to download an image from a URL
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
        
        file.on('error', (err) => {
          fs.unlink(filepath, () => {}); // Delete the file if there's an error
          reject(err);
        });
      } else {
        reject(new Error(`Failed to download ${url}: Status ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

// Image URLs for instructor images
const instructorImages = [
  {
    url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/instructor-ali.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/ali-teaching.jpg'
  }
];

// Image URLs for testimonial images (students)
const testimonialImages = [
  {
    url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    path: 'public/images/testimonials/erik.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    path: 'public/images/testimonials/sofia.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    path: 'public/images/testimonials/ahmed.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    path: 'public/images/testimonials/linnea.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    path: 'public/images/testimonials/markus.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    path: 'public/images/testimonials/default.jpg'
  }
];

// Image URLs for avatar images (small profile pictures for ratings)
const avatarImages = Array.from({ length: 5 }, (_, i) => ({
  url: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 1}.jpg`,
  path: `public/images/avatars/avatar-${i + 1}.jpg`
}));

// Image URLs for course images
const courseImages = [
  {
    url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/courses/intro.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/courses/standard.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/courses/intensive.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/courses/conversion.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/courses/refresher.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/courses/default.jpg'
  }
];

// Image URLs for blog posts
const blogImages = [
  {
    url: 'https://images.unsplash.com/photo-1581200519120-747c3d1d20e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/blog/winter-tires.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1588411393236-d2524cca2190?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/blog/malmo-traffic-zones.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1579118339339-a14a4127f706?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/blog/eco-driving.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1611254530536-c421ae583d1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/blog/handsfree-driving.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/blog/roundabout-guide.jpg'
  }
];

// Image URLs for driving routes
const routeImages = [
  {
    url: 'https://images.unsplash.com/photo-1518557984649-7b161c230cfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/routes/limhamn-route.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1592859600972-1b0834d83747?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/routes/varnhem-bunke-route.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/routes/centrum-route.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1511108690759-009324a90311?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/routes/motorway-route.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/routes/trelleborg-route.jpg'
  }
];

// Image URLs for quiz questions
const quizImages = [
  {
    url: 'https://images.unsplash.com/photo-1564641444-88a6f65951c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/quiz/huvudled.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1564950746739-ee78db09b973?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/quiz/stopplikt.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1555443805-658637491dd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/quiz/cykelpassage.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1556122071-e404eaedb77f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    path: 'public/images/quiz/malmo-cyclists.jpg'
  }
];

// Image URLs for success stories
const successStoryImages = [
  {
    url: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    path: 'public/images/success-stories/maria.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    path: 'public/images/success-stories/ahmed.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    path: 'public/images/success-stories/anders.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    path: 'public/images/success-stories/sofia.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    path: 'public/images/success-stories/erik.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1593564284352-1c68d51307b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    path: 'public/images/success-stories/linnea.jpg'
  }
];

// Download all images
const downloadAll = async () => {
  const allImages = [
    ...instructorImages,
    ...testimonialImages,
    ...avatarImages,
    ...courseImages,
    ...blogImages,
    ...routeImages,
    ...quizImages,
    ...successStoryImages
  ];

  for (const img of allImages) {
    try {
      await downloadImage(img.url, img.path);
    } catch (error) {
      console.error(`Error downloading ${img.path}:`, error.message);
    }
  }
  
  console.log('All downloads completed!');
};

// Execute the download
downloadAll(); 