// Data structure for subjects and classes
const subjectsData = {
    "ICSE": {
        classes: ["Class-1", "Class-2", "Class-3"],
        driveLinks: {
            "Class-1": "https://drive.google.com/drive/folders/1UMMCoSaEJoI8lcxwC6Zw9a8wg7nVT6ud?usp=drive_link",
            "Class-2": "https://drive.google.com/file/d/19sKytIM5Afz9YWHPEijyhRzl2BvfqH3l/view?usp=drive_link",
            "Class-3": "https://drive.google.com/file/d/19sKytIM5Afz9YWHPEijyhRzl2BvfqH3l/view?usp=drive_link",
        }
    },
    "CBSE": {
        classes: ["Class-1", "Class-2", "Class-3"],
        driveLinks: {
            "Class-1": "https://drive.google.com/file/d/19sKytIM5Afz9YWHPEijyhRzl2BvfqH3l/view?usp=drive_link",
            "Class-2": "https://drive.google.com/file/d/19sKytIM5Afz9YWHPEijyhRzl2BvfqH3l/view?usp=drive_link",
            "Class-3": "https://drive.google.com/file/d/19sKytIM5Afz9YWHPEijyhRzl2BvfqH3l/view?usp=drive_link"
        }
    },
    "Competitive Exam": {
        classes: ["UPSC", "SSC", "WBCS"],
        driveLinks: {
            "UPSC": "https://drive.google.com/file/d/19sKytIM5Afz9YWHPEijyhRzl2BvfqH3l/view?usp=drive_link",
            "SSC": "https://drive.google.com/file/d/19sKytIM5Afz9YWHPEijyhRzl2BvfqH3l/view?usp=drive_link",
            "WBSC": "https://drive.google.com/file/d/19sKytIM5Afz9YWHPEijyhRzl2BvfqH3l/view?usp=drive_link"
        }
    }
};


// Define class ranges/descriptions for each subject
const subjectDetails = {
    "ICSE": "(Class-1 to Class-10) (Eng. Lit.)",
    "CBSE": "(Class-1 to Class-10) (Eng. Lit.)",
    "Competitive Exam": "(Humanities Part)",
  };
  
  if (document.querySelector('#subjectContainer')) {
      const container = document.getElementById('subjectContainer');
      
      Object.keys(subjectsData).forEach(subject => {
          const card = document.createElement('a');
          card.className = 'card';
          card.href = `classes.html?subject=${encodeURIComponent(subject)}`;
          
          // Get custom description or use default
          const description = subjectDetails[subject] ;
          
          card.innerHTML = `<h2>${subject}</h2><p>${description}</p>`;
          container.appendChild(card);
      });
  }



// Initialize classes page
if (document.querySelector('#classContainer')) {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    
    if (subject && subjectsData[subject]) {
        document.getElementById('subjectTitle').textContent = subject;
        const container = document.getElementById('classContainer');
        
        subjectsData[subject].classes.forEach(className => {
            const card = document.createElement('a');
            card.className = 'card';
            card.href = subjectsData[subject].driveLinks[className];
            card.target = "_blank";
            card.innerHTML = `<h2>${className}</h2><p>Click to view notes</p>`;
            container.appendChild(card);
        });
    } else {
        window.location.href = 'index.html';
    }
}

