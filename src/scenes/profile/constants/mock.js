const categories = [
    {
      id: 'renovations',
      name: 'Home Renovations',
      tags: ['renovations', 'Home Renovations'],
      count: 147,
      cardStyle: 'card1',
      updatedDate: '2 Feb 2021',
      members: [
        {
          id: 1,
          user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          },
          saved: true,
          location: 'Peel Bank Data',
          temperature: 34,
          title: 'Employment Rate Decreased',
          description: 'Unemployment has increased in the Peel region, from 11.3% to 11.7% vs last month.',
          rating: 4.3,
          reviews: 3212,
          preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          ]
        },
        {
          id: 2,
          user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          },
          saved: false,
          location: 'Loutraki, Greece',
          temperature: 34,
          title: 'Loutraki',
          description: 'This attractive small town, 80 kilometers from Athens',
          rating: 4.6,
          reviews: 3212,
          preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
          ]
        },
        {
          id: 3,
          user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          },
          saved: true,
          location: 'Santorini, Greece',
          temperature: 34,
          title: 'Santorini',
          description: 'Santorini - Description',
          rating: 3.2,
          reviews: 3212,
          preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          ]
        },
        {
          id: 4,
          user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          },
          location: 'Loutraki, Greece',
          temperature: 34,
          title: 'Loutraki',
          description: 'This attractive small town, 80 kilometers from Athens',
          rating: 5,
          reviews: 3212,
          preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
          ]
        },
      ]
    },
    {
      id: 'economic',
      name: 'Economic Indicators',
      tags: ['economic', 'Economic Indicators'],
      count: 16,
      cardStyle: 'card1',
      updatedDate: '2 Feb 2021',
      members: [
        {
          id: 1,
          user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          },
          saved: true,
          location: 'Peel Bank Data',
          temperature: 34,
          title: 'Employment Rate Decreased',
          description: 'Unemployment has increased in the Peel region, from 11.3% to 11.7% vs last month.',
          rating: 4.3,
          reviews: 3212,
          preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          ]
        },
        {
          id: 2,
          user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          },
          saved: false,
          location: 'Loutraki, Greece',
          temperature: 34,
          title: 'Loutraki',
          description: 'This attractive small town, 80 kilometers from Athens',
          rating: 4.6,
          reviews: 3212,
          preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
          ]
        },
        {
          id: 3,
          user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          },
          saved: true,
          location: 'Santorini, Greece',
          temperature: 34,
          title: 'Santorini',
          description: 'Santorini - Description',
          rating: 3.2,
          reviews: 3212,
          preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          ]
        },
        {
          id: 4,
          user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          },
          location: 'Loutraki, Greece',
          temperature: 34,
          title: 'Loutraki',
          description: 'This attractive small town, 80 kilometers from Athens',
          rating: 5,
          reviews: 3212,
          preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
          ]
        },
      ]
    },
    {
      id: 'neighbourhood',
      name: 'Neighbourhood Development',
      tags: ['neighbourhood', 'Neighbourhood Development'],
      count: 68,
      cardStyle: 'card1',
      updatedDate: '2 Feb 2021',
      members: [
        {
          id: 1,
          user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          },
          saved: true,
          location: 'Peel Bank Data',
          temperature: 34,
          title: 'Employment Rate Decreased',
          description: 'Unemployment has increased in the Peel region, from 11.3% to 11.7% vs last month.',
          rating: 4.3,
          reviews: 3212,
          preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          ]
        },
        {
          id: 2,
          user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          },
          saved: false,
          location: 'Loutraki, Greece',
          temperature: 34,
          title: 'Loutraki',
          description: 'This attractive small town, 80 kilometers from Athens',
          rating: 4.6,
          reviews: 3212,
          preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
          ]
        },
        {
          id: 3,
          user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          },
          saved: true,
          location: 'Santorini, Greece',
          temperature: 34,
          title: 'Santorini',
          description: 'Santorini - Description',
          rating: 3.2,
          reviews: 3212,
          preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          ]
        },
        {
          id: 4,
          user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          },
          location: 'Loutraki, Greece',
          temperature: 34,
          title: 'Loutraki',
          description: 'This attractive small town, 80 kilometers from Athens',
          rating: 5,
          reviews: 3212,
          preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
          ]
        },
      ]
    },
    
  ];
  
  const products = [
    {
      id: 1, 
      name: '16 Best Plants That Thrive In Your Bedroom',
      description: 'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
      tags: ['Interior', '27 m²', 'Ideas'],
      images: [
        require('./images1/plants_1.png'),
        require('./images1/plants_2.png'),
        require('./images1/plants_3.png'),
        // showing only 3 images, show +6 for the rest
        require('./images1/plants_1.png'),
        require('./images1/plants_2.png'),
        require('./images1/plants_3.png'),
        require('./images1/plants_1.png'),
        require('./images1/plants_2.png'),
        require('./images1/plants_3.png'),
      ]
    }
  ];
  
  const explore = [
    // images
    require('./images1/explore_1.png'),
    require('./images1/explore_2.png'),
    require('./images1/explore_3.png'),
    require('./images1/explore_4.png'),
    require('./images1/explore_5.png'),
    require('./images1/explore_6.png'),
  ];
  
  const profile = {
    username: 'react-ui-kit',
    location: 'Europe',
    email: 'contact@react-ui-kit.com',
    avatar: require('./images1/avatar.png'),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false,
  };
  const mainCards = [
    {
      id:1, 
      name: "Economic Indicators", 
      active: true, 
      cardStyle: 'card',
      updatedDate: '2 Feb 2021',  
      members:[
        
      ]
    },
    {
      id:2, 
      name: "Home Renovations", 
      active: false, 
      cardStyle: 'card1',
      updatedDate: '2 Feb 2021',  
      members:[
        
      ]
    },
    {
      id:3, 
      name: "Neighbourhood Development", 
      active: false, 
      cardStyle: 'card2',
      updatedDate: '2 Feb 2021',  
      members:[
        
      ]
    }
  ]
  
  export {
    categories,
    explore,
    products,
    profile,
    mainCards
  }