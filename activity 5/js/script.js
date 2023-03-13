const packageData = [
    {
      name: 'Package 1',
      url: 'https://example.com/package1',
      description: 'This is the first package',
      author: 'John Doe',
      downloads: 10000,
      stars: 500,

      image: 'https://example.com/package1.png'
    },
    {
      name: 'Package 2',
      url: 'https://example.com/package2',
      description: 'This is the second package',
      author: 'Jane Smith',
      downloads: 5000,
      stars: 100,
      image: 'https://example.com/package2.png'
    }
  ];
  
 
  function Package(data) {
    this.name = data.name;
    this.url = data.url;
    this.description = data.description;
    this.author = data.author;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.image = data.image;
    
    this.getFormattedDownloads = function() {
      return this.downloads.toLocaleString();
    }
  }
  

  const packages = packageData.map(function(data) {
    return new Package(data);
  });
  
  
  document.getElementById('package-name-1').textContent = packages[0].name;
  document.getElementById('package-url-1').href = packages[0].url;
  document.getElementById('package-url-1').textContent = packages[0].url;
  document.getElementById('package-description-1').textContent = packages[0].description;
  document.getElementById('package-author-1').textContent = packages[0].author;
  document.getElementById('package-downloads-1').textContent = packages[0].getFormattedDownloads();
  document.getElementById('package-stars-1').textContent = packages[0].stars;
  document.getElementById('package-image-1').src = packages[0].image;
  
  document.getElementById('package-name-2').textContent = packages[1].name;
  document.getElementById('package-url-2').href = packages[1].url;
  document.getElementById('package-url-2').textContent = packages[1].url;
  document.getElementById('package-description-2').textContent = packages[1].description;
  document.getElementById('package-author-2').textContent = packages[1].author;
  document.getElementById('package-downloads-2').textContent = packages[1].getFormattedDownloads();

  document.getElementById('package-stars-2').textContent = packages[1].stars;
  document.getElementById('package-image-2').src = packages[1].image;