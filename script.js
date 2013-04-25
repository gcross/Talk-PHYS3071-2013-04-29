headings = [ // {{{
    "REPL",
    "Python",
    "Bisection",
] // }}}

script = function(){ return [ // {{{
    "REPL", // {{{
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
    // }}}
    "Python", // {{{
    fadeOutAndFire(0.5,"REPL_Read","REPL_Print","REPL_Evaluate","REPL_Loop","REPL_Command_line"),
    rotateNextHeading(),
    hireAndFadeIn(0.5,"Python_intro_lines"),
    "",
    hireAndFadeIn(0.5,"Python_intro_1"),
    "",
    hireAndFadeIn(0.5,"Python_intro_2"),
    "",
    hireAndFadeIn(0.5,"Python_intro_3"),
    // }}}
    "B_alg", // {{{
    fadeOutAndFire(0.5,"Python_intro_lines","Python_intro_1","Python_intro_2","Python_intro_3"),
    rotateNextHeading(),
    "",
    hireAndFadeIn(0.5,"B_alg_1"),
    "",
    hireAndFadeIn(0.5,"B_alg_2"),
    "",
    hireAndFadeIn(0.5,"B_alg_2a"),
    "",
    hireAndFadeIn(0.5,"B_alg_2b"),
    "",
    hireAndFadeIn(0.5,"B_alg_2c"),
    // }}}
    "B_ex", // {{{
    fadeOutAndFire(0.5,"B_alg_1","B_alg_2","B_alg_2a","B_alg_2b","B_alg_2c"),
    hireAndFadeIn(0.5,"B_ex_axes"),
    "",
    hireAndFadeInUseActors(0.5,
        "B_ex_dot_1","B_ex_tic_1",
        "B_ex_a","B_ex_foa",
        "B_ex_dot_6","B_ex_tic_6",
        "B_ex_b","B_ex_fob"
    ),
    "",
    hireAndFadeInUseActors(0.5,"B_ex_tic_5","B_ex_dot_5","B_ex_x","B_ex_fox"),
    "",
    parallel(
        fadeOut(0.5,"B_ex_x"),
        fadeOut(0.5,"B_ex_fox"),
        smooth(1,"B_ex_b","x",-355),
        smooth(1,"B_ex_fob","x",-355),
        smooth(1,"B_ex_fob","y",58),
        fadeOutAndFire(0.5,"B_ex_dot_6","B_ex_tic_6")
    ),
    "",
    set("B_ex_x","x",-177.5),
    set("B_ex_fox","x",-177.5),
    set("B_ex_fox","y",387),
    parallel(
        fadeIn(0.5,"B_ex_x"),
        fadeIn(0.5,"B_ex_fox"),
        hireAndFadeInUseActors(0.5,"B_ex_tic_2","B_ex_dot_2")
    ),
    "",
    parallel(
        fadeOut(0.5,"B_ex_x"),
        fadeOut(0.5,"B_ex_fox"),
        smooth(1,"B_ex_a","x",177.5),
        smooth(1,"B_ex_foa","x",177.5),
        smooth(1,"B_ex_foa","y",80),
        fadeOutAndFire(0.5,"B_ex_dot_1","B_ex_tic_1")
    ),
    "",
    set("B_ex_x","x",-88.75),
    set("B_ex_fox","x",-88.75),
    set("B_ex_fox","y",288),
    parallel(
        fadeIn(0.5,"B_ex_x"),
        fadeIn(0.5,"B_ex_fox"),
        hireAndFadeInUseActors(0.5,"B_ex_tic_3","B_ex_dot_3")
    ),
    "",
    parallel(
        fadeOut(0.5,"B_ex_x"),
        fadeOut(0.5,"B_ex_fox"),
        smooth(1,"B_ex_a","x",266.26),
        smooth(1,"B_ex_foa","x",266.26),
        smooth(1,"B_ex_foa","y",-20),
        fadeOutAndFire(0.5,"B_ex_dot_2","B_ex_tic_2")
    ),
    "",
    set("B_ex_x","x",-44.375),
    set("B_ex_fox","x",-44.375),
    set("B_ex_fox","y",87),
    parallel(
        fadeIn(0.5,"B_ex_x"),
        fadeIn(0.5,"B_ex_fox"),
        hireAndFadeInUseActors(0.5,"B_ex_tic_4","B_ex_dot_4")
    ),
    "",
    hireAndFadeIn(0.5,"B_ex_error")
    // }}}
]} // }}}
