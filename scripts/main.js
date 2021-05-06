Vue.component('todo-comp', {
    data: function(){
        return {
            todo: '',
            todoList: [],
            editMode: false,
            idEdit: null
        }
    },
    methods: {
        addTodo(){
            if(this.todo != ''){
                this.todoList.push(this.todo)
            }else{
                alert('Adicione uma nota!')
            }
            
            this.todo = ''
        },
        deleteTodo(i){
            this.todoList.splice(i, 1)
        },
        editTodo(i){
            this.editMode = true
            this.todo = this.todoList[i]
            this.idEdit = i
            
        },
        updateTodo(){
            
            this.todoList[this.idEdit] = this.todo
            this.todo = ''
            this.idEdit = null
            this.editMode = false
        }
    },
    template: `<div class='principal'>
        
        
            <div class='insert' v-if='!editMode'>
                <input type="text" v-model='todo' @keyup.enter='addTodo' placeholder='Adicione o item e pressione enter para salvar'>
                
            </div>
            <div class='update' v-else>
                <input type="text" v-model='todo' @keyup.enter='updateTodo'>
            </div>
    
        <div class='todolist'>  
        <div class='todo' v-for='(todo, i) in todoList'>
            <input type='checkbox' class='check'>
            <div class='text-todo'>
            <p>{{ todo }}</p>
            </div>

            <div class='buttons'>
                <button @click='editTodo(i)'><img src='images/edit.svg' width=17></button>
                <button @click='deleteTodo(i)'><img src='images/close.svg' width=15></button>
            </div>
        </div>
        </div>
    
    </div> <!-- fim principal-->
    `
    
})

new Vue({
    el: '#app',
})
