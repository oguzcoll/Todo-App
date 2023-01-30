const addForm =document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = value =>{
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${value}</span>
    <i class="far fa-trash-alt delete"></i>
   </li>`;
   list.innerHTML += html;
}

addForm.addEventListener('submit', e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();   // trim basındaki ve sonundaki boşlugu kaldırır
    // console.log(todo);
    if(todo.length){
        generateTemplate(todo);     // hiç  bir şey yazılmadığında boş bir template ortaya çıkmasını engelliyor
        addForm.reset(); 
    }
})

list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const filterTodos = term =>{
   Array.from(list.children)
   .filter(todo => !todo.textContent.toLowerCase().includes(term))
   .forEach(todo => todo.classList.add('filtered'));

   Array.from(list.children)
   .filter(todo => todo.textContent.toLowerCase().includes(term))
   .forEach(todo => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    // console.log(term);
    filterTodos(term);
})