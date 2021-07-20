# A simple and secure Tesla Youtube login page

![Build and deploy tytlog.in](https://github.com/0xtf/tytlog.in/actions/workflows/main.yml/badge.svg)

# What is it?

To circumvent the limitation of the embedeed browser version not being able to log in to Youtube, we've developed tytlog.in. After using the website you'll be redirected to the Youtube app with your account already logged in.

# How does it work?

Simply put, we'll authenticate you in tytlog.in (which doesn't have any content other than the authentication prompt) with the objective of your car holding the authentication cookies. After that the Tesla Youtube app will make use of those cookies to automatically authenticate you. 

Simply visit [tytlog.in](https://tytlog.in) and authenticate with your Google account. That's it! 

# Security

One of the main reasons behind this simple app was to make security and privacy a priority. We made all aspects of tytlog.in open-source so the entire community can check what's happening. 
