import { useState, useEffect, useRef } from "react";
import { projectList } from "../data/projectData";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef(null);

  // Filter logic (same as yours)
  const filteredProjects = projectList.filter(project =>
    project.title.toLowerCase().includes(query.toLowerCase()) ||
    project.tags.some(tag =>
      tag.toLowerCase().includes(query.toLowerCase())
    )
  );

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (!containerRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Escape key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="searchSection">
      <div className="searchContainer" ref={containerRef}>
        
        <input
          type="text"
          className="searchInput"
          placeholder="Search for a specific project..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onClick={() => setIsOpen(true)}
        />

        <div className="searchIcon">▼</div>

        {isOpen && (
          <div className="searchResults active">

            {/* 🔹 Show all projects when empty */}
            {query === "" && (
              <>
                <div className="allProjectsHeader">All Projects</div>

                {projectList.map(project => (
                  <a
                    key={project.id}
                    href={project.url}
                    className="searchResultItem"
                  >
                    <div className="resultContent">
                      <div className="resultTitle">{project.title}</div>
                      <div className="resultDescription">
                        {project.description}
                      </div>

                      <div className="resultTags">
                        {project.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="resultSidebar">
                      <span className="resultLink">View Project →</span>
                    </div>
                  </a>
                ))}
              </>
            )}

            {/* 🔹 Filtered results */}
            {query !== "" && (
              filteredProjects.length > 0 ? (
                filteredProjects.map(project => (
                  <a
                    key={project.id}
                    href={project.url}
                    className="searchResultItem"
                  >
                    <div className="resultContent">
                      <div className="resultTitle">{project.title}</div>
                      <div className="resultDescription">
                        {project.description}
                      </div>

                      <div className="resultTags">
                        {project.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="resultSidebar">
                      <span className="resultLink">View Project →</span>
                    </div>
                  </a>
                ))
              ) : (
                <div className="noResults">
                  No projects found matching your search
                </div>
              )
            )}

          </div>
        )}
      </div>
    </section>
  );
}