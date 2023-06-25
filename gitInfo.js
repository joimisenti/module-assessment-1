/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "Git is a program that stores a repository of your data in a directory on your local drive in the form of a snapshot, tracking changes and modifications. Git provides a system of maintaining version control for code projects that prevents bugs and loss of progress by being able to access the project's history."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = "GitHub is a website where you can upload your local repositories to the online cloud service provided by GitHub to track changes to your code and share them with others."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

let gitInitDefinition = "A git command that when entered into the command line terminal initializes a git repository on your local drive in the current directory, which creates a hidden .git folder. Only after first initializing a git repository in a directory will git commands then operate."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

let gitCloneDefinition = "A git command that will clone a repository into a new directory."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

let gitStatusDefinition = "A command that will report to user details about this repository, which files are being tracked, which are not, if there are changes to commit, and on which branch."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

let gitAddDefinition = "A git command that adds the specified files with our changes to be tracked to the staging area."
let gitAddCode = "git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = "A git command that takes a snapshot of the current state of the directory to record the file changes you've made to the repository. You can add a message to describe the snapshot."
let gitCommitCode = `git commit -m "initial commit"` 


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition = "A git command that ultimately cements, stores, and updates your snapshot of changes desired for tracking, moving them from the staging area into the repository."