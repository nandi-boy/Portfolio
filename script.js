(function(){
  var root=document.documentElement,tbtn=document.getElementById('theme');
  function isDark(){var t=root.getAttribute('data-theme');return t?t==='dark':!matchMedia('(prefers-color-scheme: light)').matches}
  function paint(){tbtn.textContent=isDark()?'☀️':'🌙'}
  try{var s=localStorage.getItem('theme');if(s)root.setAttribute('data-theme',s)}catch(e){}
  paint();
  tbtn.onclick=function(){var n=isDark()?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}paint()};

  var sb=document.getElementById('sidebar'),tc=document.getElementById('toggle-contacts');
  tc.onclick=function(){var o=sb.classList.toggle('open');tc.textContent=o?'Hide Contacts':'Show Contacts'};

  var btns=document.querySelectorAll('.nav-btn'),pages=document.querySelectorAll('.page');
  btns.forEach(function(b){b.onclick=function(){
    btns.forEach(function(x){x.classList.toggle('active',x===b)});
    pages.forEach(function(p){p.classList.toggle('active',p.dataset.page===b.dataset.page)});
    window.scrollTo(0,0);
  }});

  document.querySelectorAll('.proj').forEach(function(c){
    function t(e){if(e.target.closest('a'))return;var o=c.classList.toggle('open');c.setAttribute('aria-expanded',o)}
    c.addEventListener('click',t);
    c.addEventListener('keydown',function(e){if(e.target!==c)return;if(e.key==='Enter'||e.key===' '){e.preventDefault();t(e)}});
  });

  var skills={
    'Languages':['Python','C'],
    'Databases':['MySQL'],
    'Data & Visualization':['EDA','Statistical Analysis','Data Cleaning','Feature Engineering','Matplotlib','Seaborn'],
    'ML & AI':['Supervised Learning','Unsupervised Learning','Classification','Regression','Neural Networks','Deep Learning','CNN','Computer Vision','NLP','Model Training & Evaluation'],
    'Libraries':['NumPy','Pandas','Scikit-learn','TensorFlow','Keras','OpenCV'],
    'Tools':['Git','GitHub','Jupyter Notebook','Google Colab','VS Code']
  };
  var ol=document.createElement('ol');ol.className='tl';
  Object.keys(skills).forEach(function(k){
    var li=document.createElement('li'),h=document.createElement('h4'),t=document.createElement('div');
    h.textContent=k;t.className='tags';
    skills[k].forEach(function(n){var sp=document.createElement('span');sp.textContent=n;t.appendChild(sp)});
    li.appendChild(h);li.appendChild(t);ol.appendChild(li);
  });
  document.getElementById('skills').appendChild(ol);

  document.getElementById('copy').onclick=function(){
    var b=this;
    try{navigator.clipboard.writeText('ayannandi2004@gmail.com').then(function(){b.textContent='Copied!';setTimeout(function(){b.textContent='Copy email'},1600)},function(){})}catch(e){}
  };
})();
