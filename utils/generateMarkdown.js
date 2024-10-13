function renderLicenseBadge(license) {
  if (!license) return "";

  switch (license) {
    case "MIT":
      return `![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case "Apache 2.0":
      return `![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    case "GPL 3.0":
      return `![GPL 3.0 License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  if (!license) return "";

  switch (license) {
    case "MIT":
      return `[MIT License](https://opensource.org/licenses/MIT)`;
    case "Apache 2.0":
      return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
    case "GPL 3.0":
      return `[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)`;
    default:
      return "";
  }
}

function renderLicenseSection(license) {
  if (!license) return "";

  return `## License\n\nThis project is licensed under the ${license}.\n${renderLicenseLink(license)}`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
If you have any questions, please feel free to reach out:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

export default generateMarkdown;
