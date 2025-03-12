function showNotes(type) {
    // Hide all notes sections
    const facultyNotes = document.getElementById('faculty-notes');
    const uploadedNotes = document.getElementById('uploaded-notes');

    facultyNotes.classList.remove('show');
    uploadedNotes.classList.remove('show');

    // Show the selected notes section
    if (type === 'faculty') {
        facultyNotes.style.display = 'block';
        setTimeout(() => facultyNotes.classList.add('show'), 10); // Add class after display
    } else {
        uploadedNotes.style.display = 'block';
        setTimeout(() => uploadedNotes.classList.add('show'), 10); // Add class after display
    }
}

function showCourseTwoNotes(type) {
    // Hide all course two notes sections
    const facultyNotes1 = document.getElementById('course-two-faculty-notes-1');
    const uploadedNotes1 = document.getElementById('course-two-uploaded-notes-1');
    const facultyNotes2 = document.getElementById('course-two-faculty-notes-2');
    const uploadedNotes2 = document.getElementById('course-two-uploaded-notes-2');
    const facultyNotes3 = document.getElementById('course-two-faculty-notes-3');
    const uploadedNotes3 = document.getElementById('course-two-uploaded-notes-3');
    const facultyNotes4 = document.getElementById('course-two-faculty-notes-4');
    const uploadedNotes4 = document.getElementById('course-two-uploaded-notes-4');

    // Hide all sections
    [facultyNotes1, uploadedNotes1, facultyNotes2, uploadedNotes2, facultyNotes3, uploadedNotes3, facultyNotes4, uploadedNotes4].forEach(section => {
        section.classList.remove('show');
        section.style.display = 'none';
    });

    // Show the selected notes section
    if (type === 'courseTwoFaculty1') {
        facultyNotes1.style.display = 'block';
        setTimeout(() => facultyNotes1.classList.add('show'), 10);
    } else if (type === 'courseTwoUploaded1') {
        uploadedNotes1.style.display = 'block';
        setTimeout(() => uploadedNotes1.classList.add('show'), 10);
    } else if (type === 'courseTwoFaculty2') {
        facultyNotes2.style.display = 'block';
        setTimeout(() => facultyNotes2.classList.add('show'), 10);
    } else if (type === 'courseTwoUploaded2') {
        uploadedNotes2.style.display = 'block';
        setTimeout(() => uploadedNotes2.classList.add('show'), 10);
    } else if (type === 'courseTwoFaculty3') {
        facultyNotes3.style.display = 'block';
        setTimeout(() => facultyNotes3.classList.add('show'), 10);
    } else if (type === 'courseTwoUploaded3') {
        uploadedNotes3.style.display = 'block';
        setTimeout(() => uploadedNotes3.classList.add('show'), 10);
    } else if (type === 'courseTwoFaculty4') {
        facultyNotes4.style.display = 'block';
        setTimeout(() => facultyNotes4.classList.add('show'), 10);
    } else if (type === 'courseTwoUploaded4') {
        uploadedNotes4.style.display = 'block';
        setTimeout(() => uploadedNotes4.classList.add('show'), 10);
    }
}