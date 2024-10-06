 const blogPosts = [
            {
                title: "Brute Force vs. Optimization",
                link: "https://acciojob.com/blog/brute-force-optimization",
                image: "https://images.unsplash.com/flagged/photo-1556514767-5c270b96a005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2Vh4.0.3&q=80&w=2000",
                alt: "Brute Force vs. Optimization",
                paragraph: "We can say that optimization is one step better than the brute-force method of problem-solving..."
            },
            {
                title: "DSA vs. Competitive Programming",
                link: "https://acciojob.com/blog/dsa-competitive-programming",
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2Vh4.0.3&q=80&w=2000",
                alt: "DSA vs. Competitive Programming",
                paragraph: "DSA or Competitive programming? What is best for you? Questions such as these often get you in a dilemma..."
            },
            {
                title: "Complete Guide on FlexBox",
                link: "https://acciojob.com/blog/untitled-19",
                image: "https://acciojob.com/blog/content/images/size/w2000/2023/02/Screenshot-2023-02-06-at-7.28.31-PM.png",
                alt: "Complete Guide on FlexBox",
                paragraph: "As a job seeker, you may wonder how to make your LinkedIn profile stand out to recruiters. Your LinkedIn..."
            }
        ];

        // Function to dynamically create and load blog posts
        function loadBlogPosts() {
            const blogSection = document.getElementById('blog');
            
            blogPosts.forEach(post => {
                // Create a new article element
                const article = document.createElement('article');
                
                // Create image element
                const img = document.createElement('img');
                img.src = post.image;
                img.alt = post.alt;
                img.height = 200;
                
                // Create heading element for the blog post title
                const h3 = document.createElement('h3');
                const link = document.createElement('a');
                link.href = post.link;
                link.textContent = post.title;
                h3.appendChild(link);
                
                // Create paragraph element
                const p = document.createElement('p');
                p.textContent = post.paragraph;
                
                // Append all elements to the article
                article.appendChild(img);
                article.appendChild(h3);
                article.appendChild(p);
                
                // Append article to the blog section
                blogSection.appendChild(article);
            });
        }

        // Call the function to load blog posts after the page is loaded
        window.onload = loadBlogPosts;