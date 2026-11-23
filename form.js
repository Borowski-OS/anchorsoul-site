document.querySelectorAll('.sf').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();
 const msg=f.querySelector('.msg');
 for(const fs of f.querySelectorAll('fieldset[data-req="1"]')){if(!fs.querySelector('input:checked')){msg.hidden=false;msg.textContent='Please choose at least one option for: '+fs.querySelector('legend').textContent.replace('(required)','').trim();return}}
 if(!f.checkValidity()){f.reportValidity();return}
 const d=new FormData(f),by={};for(const[k,v]of d.entries()){(by[k]=by[k]||[]).push(v)}
 const body=Object.entries(by).map(([k,v])=>k+': '+v.join(', ')).join('\n');
 location.href='mailto:'+f.dataset.to+'?subject='+encodeURIComponent(f.dataset.subject)+'&body='+encodeURIComponent(body);
 msg.hidden=false;msg.textContent=f.dataset.thanks+' (Your email app should have opened with your answers; just press Send.)';}));
document.querySelectorAll('.ser').forEach(s=>{const sl=s.querySelectorAll('.sl'),v=s.querySelector('.vid'),bs=s.querySelectorAll('.th button');
 bs.forEach(b=>b.addEventListener('click',()=>{bs.forEach(x=>x.classList.remove('on'));b.classList.add('on');sl.forEach(x=>x.classList.remove('on'));v.classList.remove('on');
  if(b.dataset.i==='v')v.classList.add('on');else sl[+b.dataset.i].classList.add('on')}))});
