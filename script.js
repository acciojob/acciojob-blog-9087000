//your JS code here. If required.
// Blog data stored in an array of objects
const blogPosts = [
    {
        title: "Brute Force vs. Optimization",
        link: "#",
        image: "image1.jpg",
        alt: "Brute Force vs. Optimization"
    },
    {
        title: "DSA vs. Competitive Programming",
        link: "#",
        image: "image2.jpg",
        alt: "DSA vs. Competitive Programming"
    },
    {
        title: "Complete Guide on FlexBox",
        link: "#",
        image: "image3.jpg",
        alt: "Complete Guide on FlexBox"
    }
];

// Function to load the blog posts dynamically
function loadBlogPosts() {
    const blogSection = document.getElementById('blog');
    
    blogPosts.forEach(post => {
        // Create a new article element
        const article = document.createElement('article');
        
        // Create an image element
        const img = document.createElement('img');
        img.src = post.image;
        img.alt = post.alt;
        
        // Create a heading element for the blog post title
        const h3 = document.createElement('h3');
        h3.textContent = post.title;
        
        // Create a link for the "Read More" part
        const link = document.createElement('a');
        link.href = post.link;
        link.textContent = 'Read More';
        
        // Append all elements to the article
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(link);
        
        // Append the article to the blog section
        blogSection.appendChild(article);
    });
}

// Call the function to load blog posts when the page loads
window.onload = loadBlogPosts;
