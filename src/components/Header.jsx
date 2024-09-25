
import { FaGithub } from 'react-icons/fa';

export const Header = () => {
	const year = new Date();
	return (
		<header>
			<h4>CV Maker</h4>
			<h6>By Tebibux &#169; {year.getFullYear()}</h6>
			<a href="https://github.com/Tebibux/cv-project-v2" target="_blank" rel="noreferrer">
				<FaGithub />
			</a>
		</header>
	)
}