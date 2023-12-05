// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache 2.0'){
    return `(https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }
if (license == 'Boost Software License 1.0'){
  return '(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
}
if (license == 'BSD 3-Clause License'){
  return '(https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
}
if (license == 'BSD 2-Clause License'){
  return '(https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
}
if(license === 'CC0'){
  return '(https://licensebuttons.net/l/zero/1.0/80x15.png)';
}

if(license == 'Eclipse Public License 1.0'){
return '(https://img.shields.io/badge/License-EPL_1.0-res.svg)';
}

if (license == 'The MIT License'){
return '(https://img.shields.io/badge/License-MIT-yellow.svg)';
}
return '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache 2.0'){
    return '(https://opensource.org/licenses/Apache-2.0)'}

  if (license == 'Boost Software License 1.0'){
    return '(https://www.boost.org/LICENSE_1_0.txt)'}

  if (license == 'BSD 3-Clause License'){
    return '(https://opensource.org/licenses/BSD-3-Clause)'}

  if (license == 'BSD 2-Clause License'){
    return '(https://opensource.org/licenses/BSD-2-Clause)';
  }

  if(license === 'CC0'){
    return '(https://creativecommons.org/publicdomain/zero/1.0/)';
  }

   if(license == 'Eclipse Public License 1.0'){
    return '(https://opensource.org/linceses/EPL-1.0)';
   }

  if (license == 'The MIT License'){
    return'(https://opensource.org/licenses/MIT)';
  }

    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license == 'Apache 2.0'){
    return `[![License]${renderLicenseBadge(license)}]${renderLicenseLink(license)}`;
}

if (license == 'Boost Software License 1.0'){
  return `[![License]${renderLicenseBadge(license)}]${renderLicenseLink(license)}`;

}

if (license == 'BSD 3-Clause License'){
  return `[![License]${renderLicenseBadge(license)}]${renderLicenseLink(license)}`;
}

if (license == 'BSD 2-Clause License'){
  return `[![License]${renderLicenseBadge(license)}]${renderLicenseLink(license)}`;
}

if(license === 'CC0'){
  return `[![License: CC0-1.0]${renderLicenseBadge(license)}]${renderLicenseLink(license)}`;
}

if(license == 'Eclipse Public License 1.0'){
  return `[![License]${renderLicenseBadge(license)}]${renderLicenseLink(license)}`;

}

if (license == 'The MIT License'){
  return `[![License: MIT]${renderLicenseBadge(license)}]${renderLicenseLink(license)}`;
}

if (license == ''){
return '';
}

}







// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
