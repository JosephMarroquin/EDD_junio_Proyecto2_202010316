class NodeAVL {

    constructor(_pelicula) {
        this._pelicula = _pelicula;
        this.left = null;
        this.right = null;
        this.alt = 0;
        this.id = this.correlativo++;
    }
}
let a=false;
class AVL {

    add(_pelicula) {
        this.root = this.add2(_pelicula, this.root);
    }

    add2(_pelicula,tmp) {
        if (tmp == null) {
            tmp = new NodeAVL(_pelicula);
        } else if (_pelicula.id_pelicula < tmp._pelicula.id_pelicula) {
            tmp.left = this.add2(_pelicula, tmp.left);
            if ((this.altura(tmp.left) - this.altura(tmp.right)) == 2) {
                if (_pelicula.id_pelicula < tmp.left._pelicula.id_pelicula) {
                    tmp = this.srl(tmp);
                } else {
                    tmp = this.drl(tmp);
                }
            }
        } else {
            tmp.right = this.add2(_pelicula, tmp.right);
            if ((this.altura(tmp.right) - this.altura(tmp.left)) == 2) {
                if (_pelicula.id_pelicula > tmp.right._pelicula.id_pelicula) {
                    tmp = this.srr(tmp);
                } else {
                    tmp = this.drr(tmp);
                }
            }

        }
        let d, i, m;
        d = this.altura(tmp.right);
        i = this.altura(tmp.left);
        m = this.maxi(d, i);
        tmp.alt = m + 1;
        return tmp;
    }

    altura(tmp) {
        if (tmp == null) {
            return -1;
        } else {
            return tmp.alt;
        }
    }

    maxi(val1,val2) {
        return ((val1 > val2) ? val1 : val2);
    }

    srl(t1) {
        let t2;
        t2 = t1.left;
        t1.left = t2.right;
        t2.right = t1;
        t1.alt = this.maxi(this.altura(t1.left), this.altura(t1.right)) + 1;
        t2.alt = this.maxi(this.altura(t2.left), t1.alt) + 1;
        return t2;
    }

    srr(t1) {
        let t2;
        t2 = t1.right;
        t1.right = t2.left;
        t2.left = t1;
        t1.alt = this.maxi(this.altura(t1.left), this.altura(t1.right)) + 1;
        t2.alt = this.maxi(this.altura(t2.right), t1.alt) + 1;
        return t2;
    }

    drl(tmp) {
        tmp.left = this.srr(tmp.left);
        return this.srl(tmp);
    }

    drr(tmp) {
        tmp.right = this.srl(tmp.right);
        return this.srr(tmp);
    }
    
    validar(tmp,id){
        if (tmp != null) {
            if(tmp._pelicula.id_pelicula==id){
                a=true
                return a;
            }
            else{
                a=false
            }
            this.validar(tmp.left,id);
            this.validar(tmp.right,id);
        }
        return a
    }

    preorder(tmp) {
        if (tmp != null) {
            console.log(tmp._pelicula.id_pelicula + " ");
            this.preorder(tmp.left);
            this.preorder(tmp.right);
        }
    }

    enorder(tmp) {
        if (tmp != null) {
            this.enorder(tmp.left);
            console.log(tmp._pelicula.id_pelicula + " ");
            this.enorder(tmp.right);
        }
    }

    postorder(tmp) {
        if (tmp != null) {
            this.postorder(tmp.left);
            this.postorder(tmp.right);
            console.log(tmp._pelicula.id_pelicula + " ");
        }
    }

    //Graficar
    graficar(tmp) {
        let text=""
        text+=this.getCodigoGraphviz(tmp);
        console.log(text);
        d3.select("#lienzoPelicula").graphviz()
            .width(900)
            .height(500)
            .renderDot(text)
    }

    getCodigoGraphviz(tmp) {
        return "digraph grafica{\n"
                + "rankdir=TB;\n"
                + "node [shape = circle, style=filled, fillcolor=seashell2];\n"
                + this.getCodigoInterno(tmp)
                + "}\n";
    }

    getCodigoInterno(node) {
        let imagesTreeText = node._pelicula.id_pelicula + "\n";
        if (node.left != null) {
            imagesTreeText += node._pelicula.id_pelicula + " -> " + node.left._pelicula.id_pelicula + "\n";
            imagesTreeText+=this.getCodigoInterno(node.left);
        }
        if (node.right != null) {
            imagesTreeText += node._pelicula.id_pelicula + " -> " + node.right._pelicula.id_pelicula + "\n";
            imagesTreeText+=this.getCodigoInterno(node.right);
        }
        return imagesTreeText;
    }


}