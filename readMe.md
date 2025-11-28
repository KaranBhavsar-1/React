# React
Learning react from from youtube

create a react app using 
'''
nps create-react-app 01basicreact
'''
to run the app:-
npm run start

to build the app:-

npm run build
faster and most popular way to make react app

vite meathod (best and standard method to make react app)
'''
npm create vite@latest
'''


push to git code:-

'''
git add .

git commit -m "YOUR MESSAGE"

git push -u

'''

tailwind set up STEPS:-

npm create vite@latest my-project
cd my-project

npm install -D tailwindcss postcss autoprefixer
npm install -D tailwindcss@3.4.17
npx tailwindcss init -p


in index.css add

'''
@tailwind base;
@tailwind components;
@tailwind utilities;

'''


in tailwind.config.js edit the content to the below:-

'''
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],

'''