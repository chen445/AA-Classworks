class DomNodeCollection{
    constructor(array){
        this.array=array;
    }

    html(str){
        if(str===undefined){
            return this.array[0].innerHTML;
        }else{
            this.each(el=>el.innerHTML =str);
        }
    }

    empty(){
        this.html("")
    }

    append(arg){
        this.each(el=>{
            arg.each(a=>{
                el.appendChild(a.cloneNode(true))
            })
        })
    }

    addClass(arg){
        this.each(el=>el.classList.add(arg))
    }

    removeClass(arg){
        this.each(el=>el.classList.remove(arg))
    }
    
}