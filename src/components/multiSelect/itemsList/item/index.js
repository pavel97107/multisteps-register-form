import React from "react";

export default React.memo(function SkillsItem({ title, id, addSkillsItem }) {

  function addSkill() {
    addSkillsItem({ title, id });
  }


  return (
    <div className="skills-item item-def-style" onClick={addSkill}>
      {title}
    </div>
  );
});
