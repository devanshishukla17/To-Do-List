import React from 'react';
import './ToDo.css';

const CategoryPage = () => {
  const categories = [
    { name: 'College Study', icon: '🎓', color: '#F28B82' },
    { name: 'Personal Study', icon: '📖', color: '#FBBC05' },
    { name: 'Health Goals', icon: '💪', color: '#34A853' },
    { name: 'Miscellaneous', icon: '✨', color: '#4285F4' },
  ];

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">🪶 Discover</div>
        <div className="auth-buttons">
          <button>Sign in</button>
          <button>Sign up</button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <h1 className="page-title">TODOY</h1>
        <div className="grid-container">
          {categories.map((category, index) => (
            <div key={index} className="grid-item" style={{ backgroundColor: category.color }}>
              <div className="category-icon">{category.icon}</div>
              <div className="category-name">{category.name}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
