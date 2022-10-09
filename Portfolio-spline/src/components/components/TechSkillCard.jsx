import React from 'react'

function TechSkillCard({ icon, name }) {
    return (
        <div className="flex flex-col items-center mt-10">
            <img src={icon} alt={name} className="h-[150px] max-w-[170px]"></img>
            <h4 className="mt-5 text-gray-400">{name}</h4>
        </div>
    )
}

export default TechSkillCard