headings = [ // {{{
    "REPL",
    "Python",
] // }}}

script = function(){ return [ // {{{
    "REPL",
    hireUseActors("REPL_Read","REPL_Print","REPL_Evaluate","REPL_Loop"),
    set("REPL_Read","x",1000),
    set("REPL_Print","x",1000),
    set("REPL_Evaluate","x",1000),
    set("REPL_Loop","x",1000),
    "",
    parallel(
        sequence(
            wait(0),
            decelerate(0.5,"REPL_Read","x",0)
        ),
        sequence(
            wait(0.25),
            decelerate(0.5,"REPL_Evaluate","x",0)
        ),
        sequence(
            wait(0.50),
            decelerate(0.5,"REPL_Print","x",0)
        ),
        sequence(
            wait(0.75),
            decelerate(0.5,"REPL_Loop","x",0)
        )
    ),
    "",
    hireAndFadeIn(1,"REPL_Command_line"),
    "",
    fadeOutAndFire(0.5,"REPL_Read","REPL_Print","REPL_Evaluate","REPL_Loop","REPL_Command_line"),
    hireAndFadeIn(0.5,"Python_intro_lines"),
    "",
    hireAndFadeIn(0.5,"Python_intro_1"),
    "",
    hireAndFadeIn(0.5,"Python_intro_2"),
    "",
    hireAndFadeIn(0.5,"Python_intro_3")
]} // }}}
