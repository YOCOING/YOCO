# YOCO (You Only Copy Once) Contributing Guide

We thank to everyone who takes the time to contribute to [YOCO](https://github.com/YouOnlyCopyOnce/YOCO)!

In this document, We would like to address some step before contributing to YOCO. If you want to jump to right in, We'd like to recomment to start with this document.

## Table of Content

- [_The way to add a new feature_](#the-way-to-add-a-new-feature)
- [_Commit Convetion_](#commit-convetion)
- [_How Pull Request in YOCO works?_](#how-pull-request-in-yoco-works)
- [_Language Support_](#language-support)

Click a list of content will locate you to the document directly.

## The Way To Add A New Feature

Since the work of the code owners in YOCO all originates from issues, we recommend that contributors also create an issue before they begin working in earnest.

1. Go to [`Issue` in this repository](https://github.com/YouOnlyCopyOnce/YOCO/issues).
2. Create a new post by clicking `New Issue`.
3. There will be 2 type of your work, `Feature` and `Bug Report`.
4. By clicking `Get Started` of one of two, the contributors can create Issue.
5. After filling up the description and submitting it, Now you can add a new Pull Request

## Commit Convetion

To enable collaborators to deduce the nature of code changes that will be recorded in the history, YOCO introduces a commit convention.

All of your commits must include one of the following indicators, and deviating from this standard may result in an error during the commit:

`[chore]` Modifications related to the build process, package manager, or project settings
`[docs]` Modifications and additions to documentation
`[feat]` Work on adding new features
`[fix]` Bug fixes and typo corrections
`[refactor]` Improvements to existing code
`[style]` Code formatting unrelated to functionality, such as missing semicolons or quote adjustments
`[test]` Work related to test code

For example, if you find a typo in a document and want to correct it, a good commit message would be:

```bash
[fix] typo in contributing.md
```

## How Pull Request in YOCO Works?

Thank you for being here. If you're trying to submit the new pull request on your end, we can guess there will be at least one issue on your end. In this section, few information good to know will be supplied.

### Fork A Repo

If you want to make some changes or add new feature, We recommend you to fork this repository first since there will be few tests running should be passed in your local environment too.

To fork and clone the repository:

1. Following guide of [Create a fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo), fork the `YOCO` repository to freely experiment with branches and changes.

2. Clone your fork to your local environment.

```bash
# starting in a directory of your choice
cd ~/Documents/Github

# clone your fork of the repository
git clone git@github.com:your-github-name/YOCO.git
```

3. [Create a `remote`](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) to keep your clone and fork (`https://github.com/your-github-name/YOCO`) up-to-date.

```bash
# starting in your clone directory
cd ~//Documents/Github/YOCO
git remote add upstream git@github.com:YouOnlyCopyOnce/YOCO.git
```

When you run `git remote -v`, you'll see that you have two remotes: `upstream` and `origin`.
The `origin` remote is your fork (`https://github.com/your-github-name/YOCO`) and the `upstream` remote is the `YouOnlyCopyOnce/YOCO` repository.

### Creating a pull request

Once you've done with your work in local environment, you need to submit pull request to be merged.
This section describes how to build the project locally and how to prepare your changes for submission.

1. Go to your forked repository. (Before creating new pull request, kindly check if your forked `dev` branch is up to date.)
2. Go To Pull requests tab and click New pull request
3. Base repository will be your remote branch, and head repository will be your local branch.
   [image](./images/contribution/compareBranch.png)
4. If you find some confilcts, we recomment to fix it before submitting pull request.
5. Fill up the templates regarding your pull request.
6. Please keep in mind, If the feature you are adding is a new functionality that did not exist before, or if it enhances an existing code with additional features, you may also need to include test code. This ensures that the new or enhanced functionality works as expected and maintains the overall quality of the project.

### How reviews work

Submitted pull requests fundamentally require approval from two of the code owners before they can be merged into the remote branch. When you submit a pull request, review requests are automatically sent to the code owners. Reviews typically take several days, and may take longer depending on the volume of code changes submitted.

When your pull request is submitted, it must pass several tests. You can see the status of these tests at the bottom of the submitted pull request. If these tests fail, you may receive a request for corrections from the code owner, or your code may be modified by the code owner.

## Language Support

We support English and Korean!
All maintenance for YOCO is conducted in English, but contributions from all contributors are supported in both English and Korean. Therefore, you can choose the language you are comfortable with to write in, and then translate your contributions into either English or Korean to complete all procedures.
