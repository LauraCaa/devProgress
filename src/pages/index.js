import ProjectsData from "@/utils/projects.json";
import "@/assets/styles.css";

export default function Index() {
    const TableData = Object.keys(ProjectsData.projects).map((name) => ({
        name,
        framework: ProjectsData.projects[name].framework,
        leader: ProjectsData.projects[name].leader,
        progress: ProjectsData.projects[name].progress
    }))
    return(
        <table>
            <thead>
                <tr>
                    <th>Project</th>
                    <th>Leader</th>
                    <th>Progress</th>
                </tr>
            </thead>
            <tbody>
                {TableData.map((project, index6) => (
                <tr key={index6}>
                    <td>
                        <p className="bold-text">{project.name}</p>
                        <p className="gray-text">{project.framework}</p>
                    </td>
                    <td>{project.leader}</td>
                    <td className={`number-align ${project.progress > 50 ? "green-text": "red-text"}`}>{project.progress}%</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};