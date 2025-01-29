// Data structure for subjects and classes
const subjectsData = {
    "ICSE": {
        classes: ["Class-1", "Class-2", "Class-3","Class-4", "Class-5", "Class-6","Class-7", "Class-8", "Class-9","Class-10"],
        driveLinks: {
            "Class-1": "https://drive.google.com/drive/folders/1UMMCoSaEJoI8lcxwC6Zw9a8wg7nVT6ud?usp=drive_link",
            "Class-2": "https://drive.google.com/drive/folders/1UUgVzftLTLMwGptIL9RHbW5jxwyiK2eN?usp=drive_link",
            "Class-3": "https://drive.google.com/drive/folders/1UyWl8GrIQTYI_1cky5dFlG6PlpT0Q2BX?usp=drive_link",
            "Class-4": "https://drive.google.com/drive/folders/1VEtrwC2fKWQ5ws8bbcp040-DaIDDXJ59?usp=drive_link",
            "Class-5": "https://drive.google.com/drive/folders/1VOYuX5CbkKOv_oeT5pu0fLJe7ksWM17A?usp=drive_link",
            "Class-6": "https://drive.google.com/drive/folders/1VXffap43JdXhU1Nd9aPmtnvuu8T6Q9hs?usp=drive_link",
            "Class-7": "https://drive.google.com/drive/folders/1VZSikaSgXSrCxUdl-EV1T1mNFAzkPBq5?usp=drive_link",
            "Class-8": "https://drive.google.com/drive/folders/1Vgz2Lo8rn-TsbLUT40m7Mfr4ln2XYrRu?usp=drive_link",
            "Class-9": "https://drive.google.com/drive/folders/1VhfNWx-OMRa2U12xlY4K_w78QIx30Txr?usp=drive_link",
            "Class-10": "https://drive.google.com/drive/folders/1VnGu5Ck3xR-M3qoJ2wiNDH_IP7VgXMaU?usp=drive_link"
        }
    },
    "CBSE": {
        classes: ["Class-1", "Class-2", "Class-3","Class-4", "Class-5", "Class-6","Class-7", "Class-8", "Class-9","Class-10"],
        driveLinks: {
            "Class-1": "https://drive.google.com/drive/folders/1UAzjYkbSd63JuB-KtMtSRh9JL2K8vG75?usp=drive_link",
            "Class-2": "https://drive.google.com/drive/folders/1UI3lSFphGe1mr6DK1vbqbZmdJOcijkXi?usp=drive_link",
            "Class-3": "https://drive.google.com/drive/folders/1Uah4AOELius05EjetzCf3_lc7z8-hT20?usp=drive_link",
            "Class-4": "https://drive.google.com/drive/folders/1UcTjtyqEEnh6qsrPvf5LrkOcS0jnQ3zb?usp=drive_link",
            "Class-5": "https://drive.google.com/drive/folders/1UcZTppuQ3WOtlY8I7sGBa3T_8xefFFCJ?usp=drive_link",
            "Class-6": "https://drive.google.com/drive/folders/1UctOKvkIDJISWOagSlEnwM7SJ_WPWuBL?usp=drive_link",
            "Class-7": "https://drive.google.com/drive/folders/1Ud3F_90eaIvmLBz28BF4uZhcADSjvW3c?usp=drive_link",
            "Class-8": "https://drive.google.com/drive/folders/1UhPkYNtABNQNh-SGiFRBWXV41gpTTkfU?usp=drive_link",
            "Class-9": "https://drive.google.com/drive/folders/1UmW7eAB51zlntA9Seg4ckwGk8zAab_eT?usp=drive_link",
            "Class-10": "https://drive.google.com/drive/folders/1UpIRhFuCC4Pk-fO1O_xFeIKzvGY6nkMc?usp=drive_link"
        }
    },
    "Competitive Exam": {
        classes: ["UPSC", "SSC", "WBCS"],
        driveLinks: {
            "UPSC": "https://drive.google.com/drive/folders/1UZGVHHtioMlSs7t1xRWynEKIDchLNQJn?usp=drive_link",
            "SSC": "https://drive.google.com/drive/folders/1_jpx-f-pjF5WWEsWyCTu-3qmKYNXyneU?usp=drive_link",
            "WBCS": "https://drive.google.com/drive/folders/1UaeQeOF5DckJMaD0L0CKGPrPtkg_HtQl?usp=drive_link"
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
