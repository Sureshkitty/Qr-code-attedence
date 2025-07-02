document.addEventListener('DOMContentLoaded', function () {
  const classSelect = document.getElementById('class-select');
  const subjectSelect = document.getElementById('subject-select');
  const otherSubjectContainer = document.getElementById('other-subject-container');
  const nextButton = document.getElementById('next-button');
  const errorMessage = document.getElementById('error-message');
  const otherSubjectInput = document.getElementById('other-subject');
  const clock = document.getElementById('clock');

  subjectSelect.addEventListener('change', function () {
    if (subjectSelect.value === 'Others') {
      otherSubjectContainer.style.display = 'block';
    } else {
      otherSubjectContainer.style.display = 'none';
      otherSubjectInput.value = ''; 
    }
  });

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 4000);
  }

  nextButton.addEventListener('click', function () {
    const selectedClass = classSelect.value;
    let selectedSubject = subjectSelect.value;

    if (selectedSubject === 'Others') {
      const otherSubjectName = otherSubjectInput.value.trim();
      if (!otherSubjectName) {
        showError('Please specify your subject if you selected "Others".');
        return;
      }
      selectedSubject = otherSubjectName;
    }

    if (!selectedClass || !selectedSubject) {
      showError('Please select both class and subject before proceeding.');
      return;
    }

    localStorage.setItem('selectedClass', selectedClass);
    localStorage.setItem('selectedSubject', selectedSubject);

    console.log('Selected Class:', selectedClass);
    console.log('Selected Subject:', selectedSubject);

    window.location.href = 'attendance.html';
  });

  function updateClock() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
  }

  setInterval(updateClock, 1000);
  updateClock();
});
