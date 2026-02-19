
export default (lesson) => {
    lesson.name = lesson.name[0].toUpperCase() + lesson.name.slice(1).toLowerCase();
    lesson.description = lesson.description.toLowerCase();
}

