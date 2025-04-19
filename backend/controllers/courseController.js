const db = require('../db');

exports.getAllCourses = async (req, res) => {
    try {
        console.log('Getting all courses...');
        const [courses] = await db.query(
            'SELECT id, title, description, thumbnail, created_at, updated_at FROM courses ORDER BY created_at DESC'
        );
        
        // Log để debug
        console.log('Courses found:', courses);
        
        if (!courses || courses.length === 0) {
            return res.status(404).json({ message: 'Không tìm thấy khóa học nào' });
        }

        res.json(courses);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Lỗi server: ' + error.message });
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const [courses] = await db.query(
            'SELECT * FROM courses WHERE id = ?',
            [id]
        );

        if (courses.length === 0) {
            return res.status(404).json({ message: 'Không tìm thấy khóa học' });
        }

        // Lấy thêm thông tin về chapters của khóa học
        const [chapters] = await db.query(
            'SELECT * FROM chapters WHERE course_id = ? ORDER BY chapter_order',
            [id]
        );

        const course = courses[0];
        course.chapters = chapters;

        res.json(course);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Lỗi server: ' + error.message });
    }
}; 