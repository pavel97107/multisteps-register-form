import React from 'react'
import SkillsItem from './item'


export default function ItemsList({ ItemsListData, addSkillsItem, setShowItemsList }) {
    function handlerClickDisplayOutSide(e) {
      if (e.target && e.target.closest(".selected-items")) return;
      if (e.target && !e.target.classList.contains("skills-item")) {
        setShowItemsList(false);
      }
    }
  
    React.useEffect(() => {
      document.addEventListener("mousedown", handlerClickDisplayOutSide);
  
      return () => {
        document.removeEventListener("mousedown", handlerClickDisplayOutSide);
      };
    }, []);


  
    return (
      <div className="skills-items">
        {ItemsListData.map((item) => {
          return (
            <SkillsItem
              key={item.id}
              title={item.title}
              id={item.id}
              addSkillsItem={addSkillsItem}
            />
          );
        })}
      </div>
    );
  }
  