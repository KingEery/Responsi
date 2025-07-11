// backend/data.js
const educationHistory = [ 
    { id: 1,
     period: '2023 - Sekarang',
     institution: 'Universitas AMIKOM Yogyakarta',
     major: 'S1 - Teknik Informatika' 
    },
    { id: 2,
     period: '2018 - 2021',
     institution: 'SMK Penerbangan AAG Adisutjipto',
     major: 'Aircraft Machining' 
    }
];
const skills = [ 
    { name: 'Vue.js', level: 'Pemula' }, { name: 'JavaScript', level: 'Pemula' },
    { name: 'Tailwind CSS', level: 'Pemula' }, { name: 'Node.js', level: 'Pemula' },
    { name: 'Express.js', level: 'Pemula' }, { name: 'PostgreSQL', level: 'Pemula' },
    { name: 'Git & GitHub', level: 'Pemula' }, { name: 'HTML5 & CSS3', level: 'Pemula' }
];
const projects = [ 
    { title: 'Notifikasi Damage Game', image: '/src/assets/mendaki.png',
    description: 'Sistem Notifikasi Damage Game Sederhana', tech: ['C#'
], link: '#' },
    { title: 'Simulasi Traffic Light', image: '/src/assets/img/TrafficL.png',
    description: 'Simulasi traffic light dengan protheus', tech: ['Protheus 8', 'CVAVR'], link: '#' }
];
module.exports = { educationHistory, skills, projects };