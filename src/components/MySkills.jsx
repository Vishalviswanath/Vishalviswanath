import React from 'react';

const skills = [
  { icon: 'public/logos/pngwing.com (0).png' },
  { icon: 'public/logos/pngwing.com (1).png' },
  { icon: 'public/logos/pngwing.com (2).png' },
  { icon: 'public/logos/pngwing.com (3).png' },
  { icon: 'public/logos/pngwing.com (4).png' },
  { icon: 'public/logos/pngwing.com (5).png' },
  { icon: 'public/logos/pngwing.com (6).png' },
  { icon: 'public/logos/pngwing.com (7).png' },
  { icon: 'public/logos/pngwing.com (8).png' },
  { icon: 'public/logos/pngwing.com (9).png' },
  { icon: 'public/logos/pngwing.com (10).png' },
  { icon: 'public/logos/pngwing.com (11).png' },
  { icon: 'public/logos/pngwing.com (12).png' },
  { icon: 'public/logos/pngwing.com (13).png' },
  { icon: 'public/logos/pngwing.com (14).png' },
  { icon: 'public/logos/pngwing.com (15).png' },
  { icon: 'public/logos/pngwing.com (16).png' },
  { icon: 'public/logos/pngwing.com (17).png' },
  { icon: 'public/logos/pngwing.com (18).png' },
  { icon: 'public/logos/pngwing.com (19).png' },
  { icon: 'public/logos/pngwing.com (20).png' },
  { icon: 'public/logos/pngwing.com (21).png' },
  { icon: 'public/logos/pngwing.com (22).png' },
  { icon: 'public/logos/pngwing.com (23).png' },
  { icon: 'public/logos/pngwing.com (24).png' },
];

const Skills = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-4xl p-1 border-2 border-[var(--color3)] overflow-hidden group hover:bg-[var(--color3)] transition-all duration-300">
              <img
                src={skill.icon}
                alt={`Skill ${index}`}
                className="w-full h-full object-contain p-2 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;