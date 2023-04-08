
let count = 0;
document.querySelector(".count").innerHTML = count++;


document.querySelector(".yes1").addEventListener("click", yes1)
function yes1() {
    document.querySelector(".count").innerHTML = count++;
    this.disabled = "disabled"
    document.querySelector(".yes1").classList.add("true")
    document.querySelector(".no1").classList.add("false")
    document.querySelector(".no101").classList.add("false")
    if (count >= 4) {
        document.querySelector(".one").classList.add("level1-3")
    }

    if (count >= 7) {
        document.querySelector(".two").classList.add("level3-6")
    }

    if (count >= 11) {
        document.querySelector(".three").classList.add("level6-9")
    }
}

document.querySelector(".no1").addEventListener("click", no1)
document.querySelector(".no101").addEventListener("click", no101)
function no1() {
    document.querySelector(".yes1").classList.add("false")
    document.querySelector(".no101").classList.add("false")
    document.querySelector(".no1").classList.add("red")
    this.disabled = "disabled"

}

function no101() {
    document.querySelector(".yes1").classList.add("false")
    document.querySelector(".no1").classList.add("false")
    document.querySelector(".no101").classList.add("red")
    this.disabled = "disabled"

}

document.querySelector(".yes2").addEventListener("click", yes2)
function yes2() {
    document.querySelector(".count").innerHTML = count++;
    this.disabled = "disabled"
    document.querySelector(".yes2").classList.add("true")
    document.querySelector(".no2").classList.add("false")
    document.querySelector(".no202").classList.add("false")
    if (count >= 4) {
        document.querySelector(".one").classList.add("level1-3")
    }

    if (count >= 7) {
        document.querySelector(".two").classList.add("level3-6")
    }

    if (count >= 11) {
        document.querySelector(".three").classList.add("level6-9")
    }
}

document.querySelector(".no2").addEventListener("click", no2)
document.querySelector(".no202").addEventListener("click", no202)
function no2() {
    document.querySelector(".yes2").classList.add("false")
    document.querySelector(".no202").classList.add("false")
    document.querySelector(".no2").classList.add("red")
    this.disabled = "disabled"

}

function no202() {
    document.querySelector(".yes2").classList.add("false")
    document.querySelector(".no2").classList.add("false")
    document.querySelector(".no202").classList.add("red")
    this.disabled = "disabled"

}

document.querySelector(".yes3").addEventListener("click", yes3)
function yes3() {
    document.querySelector(".count").innerHTML = count++;
    this.disabled = "disabled"
    document.querySelector(".yes3").classList.add("true")
    document.querySelector(".no3").classList.add("false")
    document.querySelector(".no303").classList.add("false")
    if (count >= 4) {
        document.querySelector(".one").classList.add("level1-3")
    }

    if (count >= 7) {
        document.querySelector(".two").classList.add("level3-6")
    }

    if (count >= 11) {
        document.querySelector(".three").classList.add("level6-9")
    }
}

document.querySelector(".no3").addEventListener("click", no3)
document.querySelector(".no303").addEventListener("click", no303)
function no3() {
    document.querySelector(".yes3").classList.add("false")
    document.querySelector(".no303").classList.add("false")
    document.querySelector(".no3").classList.add("red")
    this.disabled = "disabled"

}

function no303() {
    document.querySelector(".yes3").classList.add("false")
    document.querySelector(".no3").classList.add("false")
    document.querySelector(".no303").classList.add("red")
    this.disabled = "disabled"

}

document.querySelector(".yes4").addEventListener("click", yes4)
function yes4() {
    document.querySelector(".count").innerHTML = count++;
    this.disabled = "disabled"
    document.querySelector(".yes4").classList.add("true")
    document.querySelector(".no4").classList.add("false")
    document.querySelector(".no404").classList.add("false")
    if (count >= 4) {
        document.querySelector(".one").classList.add("level1-3")
    }

    if (count >= 7) {
        document.querySelector(".two").classList.add("level3-6")
    }

    if (count >= 11) {
        document.querySelector(".three").classList.add("level6-9")
    }
}

document.querySelector(".no4").addEventListener("click", no4)
document.querySelector(".no404").addEventListener("click", no404)
function no4() {
    document.querySelector(".yes4").classList.add("false")
    document.querySelector(".no404").classList.add("false")
    document.querySelector(".no4").classList.add("red")
    this.disabled = "disabled"

}

function no404() {
    document.querySelector(".yes4").classList.add("false")
    document.querySelector(".no4").classList.add("false")
    document.querySelector(".no404").classList.add("red")
    this.disabled = "disabled"

}

document.querySelector(".yes5").addEventListener("click", yes5)
function yes5() {
    document.querySelector(".count").innerHTML = count++;
    this.disabled = "disabled"
    document.querySelector(".yes5").classList.add("true")
    document.querySelector(".no5").classList.add("false")
    document.querySelector(".no505").classList.add("false")
    if (count >= 4) {
        document.querySelector(".one").classList.add("level1-3")
    }

    if (count >= 7) {
        document.querySelector(".two").classList.add("level3-6")
    }

    if (count >= 11) {
        document.querySelector(".three").classList.add("level6-9")
    }
}

document.querySelector(".no5").addEventListener("click", no5)
document.querySelector(".no505").addEventListener("click", no505)
function no5() {
    document.querySelector(".yes5").classList.add("false")
    document.querySelector(".no505").classList.add("false")
    document.querySelector(".no5").classList.add("red")
    this.disabled = "disabled"

}

function no505() {
    document.querySelector(".yes5").classList.add("false")
    document.querySelector(".no5").classList.add("false")
    document.querySelector(".no505").classList.add("red")
    this.disabled = "disabled"

}

document.querySelector(".yes6").addEventListener("click", yes6)
function yes6() {
    document.querySelector(".count").innerHTML = count++;
    this.disabled = "disabled"
    document.querySelector(".yes6").classList.add("true")
    document.querySelector(".no6").classList.add("false")
    document.querySelector(".no606").classList.add("false")
    if (count >= 4) {
        document.querySelector(".one").classList.add("level1-3")
    }

    if (count >= 7) {
        document.querySelector(".two").classList.add("level3-6")
    }

    if (count >= 11) {
        document.querySelector(".three").classList.add("level6-9")
    }
}

document.querySelector(".no6").addEventListener("click", no6)
document.querySelector(".no606").addEventListener("click", no606)
function no6() {
    document.querySelector(".yes6").classList.add("false")
    document.querySelector(".no606").classList.add("false")
    document.querySelector(".no6").classList.add("red")
    this.disabled = "disabled"

}

function no606() {
    document.querySelector(".yes6").classList.add("false")
    document.querySelector(".no6").classList.add("false")
    document.querySelector(".no606").classList.add("red")
    this.disabled = "disabled"

}

document.querySelector(".yes7").addEventListener("click", yes7)
function yes7() {
    document.querySelector(".count").innerHTML = count++;
    this.disabled = "disabled"
    document.querySelector(".yes7").classList.add("true")
    document.querySelector(".no7").classList.add("false")
    document.querySelector(".no707").classList.add("false")
    if (count >= 4) {
        document.querySelector(".one").classList.add("level1-3")
    }

    if (count >= 7) {
        document.querySelector(".two").classList.add("level3-6")
    }

    if (count >= 11) {
        document.querySelector(".three").classList.add("level6-9")
    }
}

document.querySelector(".no7").addEventListener("click", no7)
document.querySelector(".no707").addEventListener("click", no707)
function no7() {
    document.querySelector(".yes7").classList.add("false")
    document.querySelector(".no707").classList.add("false")
    document.querySelector(".no7").classList.add("red")
    this.disabled = "disabled"

}

function no707() {
    document.querySelector(".yes7").classList.add("false")
    document.querySelector(".no7").classList.add("false")
    document.querySelector(".no707").classList.add("red")
    this.disabled = "disabled"

}

document.querySelector(".yes8").addEventListener("click", yes8)
function yes8() {
    document.querySelector(".count").innerHTML = count++;
    this.disabled = "disabled"
    document.querySelector(".yes8").classList.add("true")
    document.querySelector(".no8").classList.add("false")
    document.querySelector(".no808").classList.add("false")
    if (count >= 4) {
        document.querySelector(".one").classList.add("level1-3")
    }

    if (count >= 7) {
        document.querySelector(".two").classList.add("level3-6")
    }

    if (count >= 11) {
        document.querySelector(".three").classList.add("level6-9")
    }
}

document.querySelector(".no8").addEventListener("click", no8)
document.querySelector(".no808").addEventListener("click", no808)
function no8() {
    document.querySelector(".yes8").classList.add("false")
    document.querySelector(".no808").classList.add("false")
    document.querySelector(".no8").classList.add("red")
    this.disabled = "disabled"

}

function no808() {
    document.querySelector(".yes8").classList.add("false")
    document.querySelector(".no8").classList.add("false")
    document.querySelector(".no808").classList.add("red")
    this.disabled = "disabled"

}

document.querySelector(".yes9").addEventListener("click", yes9)
function yes9() {
    document.querySelector(".count").innerHTML = count++;
    this.disabled = "disabled"
    document.querySelector(".yes9").classList.add("true")
    document.querySelector(".no9").classList.add("false")
    document.querySelector(".no909").classList.add("false")
    if (count >= 4) {
        document.querySelector(".one").classList.add("level1-3")
    }

    if (count >= 7) {
        document.querySelector(".two").classList.add("level3-6")
    }

    if (count >= 11) {
        document.querySelector(".three").classList.add("level6-9")
    }
}

document.querySelector(".no9").addEventListener("click", no9)
document.querySelector(".no909").addEventListener("click", no909)
function no9() {
    document.querySelector(".yes9").classList.add("false")
    document.querySelector(".no909").classList.add("false")
    document.querySelector(".no9").classList.add("red")
    this.disabled = "disabled"

}

function no909() {
    document.querySelector(".yes9").classList.add("false")
    document.querySelector(".no9").classList.add("false")
    document.querySelector(".no909").classList.add("red")
    this.disabled = "disabled"

}

document.querySelector(".yes10").addEventListener("click", yes10)
function yes10() {
    document.querySelector(".count").innerHTML = count++;
    this.disabled = "disabled"
    document.querySelector(".yes10").classList.add("true")
    document.querySelector(".no10").classList.add("false")
    document.querySelector(".no100").classList.add("false")
    if (count >= 4) {
        document.querySelector(".one").classList.add("level1-3")
    }

    if (count >= 7) {
        document.querySelector(".two").classList.add("level3-6")
    }

    if (count >= 11) {
        document.querySelector(".three").classList.add("level6-9")
    }
}

document.querySelector(".no10").addEventListener("click", no10)
document.querySelector(".no100").addEventListener("click", no100)
function no10() {
    document.querySelector(".yes10").classList.add("false")
    document.querySelector(".no100").classList.add("false")
    document.querySelector(".no10").classList.add("red")
    this.disabled = "disabled"

}

function no100() {
    document.querySelector(".yes10").classList.add("false")
    document.querySelector(".no10").classList.add("false")
    document.querySelector(".no100").classList.add("red")
    this.disabled = "disabled"

}

document.querySelector(".yes11").addEventListener("click", yes11)
function yes11() {
    document.querySelector(".count").innerHTML = count++;
    this.disabled = "disabled"
    document.querySelector(".yes11").classList.add("true")
    document.querySelector(".no11").classList.add("false")
    document.querySelector(".no110").classList.add("false")

    if (count >= 4) {
        alert("молодець але підпишись на Сергія Стернка") ;
    }else {
        alert("твоя русофобія не достатння ти повинен підписатися на Сергія Стернека")
    } 
}

document.querySelector(".no11").addEventListener("click", no11)
document.querySelector(".no110").addEventListener("click", no110)
function no11() {
    document.querySelector(".yes11").classList.add("false")
    document.querySelector(".no110").classList.add("false")
    document.querySelector(".no11").classList.add("red")
    this.disabled = "disabled"

}

function no110() {
    document.querySelector(".yes11").classList.add("false")
    document.querySelector(".no11").classList.add("false")
    document.querySelector(".no110").classList.add("red")
    this.disabled = "disabled"

}