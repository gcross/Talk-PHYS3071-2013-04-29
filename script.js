headings = [ // {{{
    "REPL",
    "Python",
    "Bisection",
    "Newton's Method",
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
    hireAndFadeIn(0.5,"B_ex_error"),
    // }}}
    "B_pros_cons", // {{{
    fadeOutAndFire(0.5,
        "B_ex_a",
        "B_ex_b",
        "B_ex_x",
        "B_ex_foa",
        "B_ex_fob",
        "B_ex_fox",
        "B_ex_tic_3",
        "B_ex_tic_4",
        "B_ex_tic_5",
        "B_ex_dot_3",
        "B_ex_dot_4",
        "B_ex_dot_5",
        "B_ex_axes",
        "B_ex_error"
    ),
    hireAndFadeInUseActors(0.5,
        "B_pros",
        "B_cons"
    ),
    "",
    hireAndFadeIn(0.5,"B_pros_1"),
    "",
    hireAndFadeIn(0.5,"B_pros_2"),
    "",
    hireAndFadeIn(0.5,"B_cons_1"),
    // }}}
    "N_illustration", // {{{
    fadeOutAndFire(0.5,
        "B_pros",
        "B_pros_1",
        "B_pros_2",
        "B_cons",
        "B_cons_1"
    ),
    rotateNextHeading(),
    hireAndFadeIn(0.5,"N_ill_graph"),
    "",
    hireAndFadeIn(0.5,"N_ill_x0"),
    "",
    hireUseActor("N_ill_dashed_x0_cover","standard_backdrop_top"),
    hireUseActor("N_ill_dashed_x0","N_ill_dashed_x0_cover"),
    hireUseActor("N_ill_fox0_dot","N_ill_dashed_x0_cover"),
    linear(0.5,"N_ill_dashed_x0_cover","y",-225),
    fire("N_ill_dashed_x0_cover"),
    hireAndFadeIn(0.5,"N_ill_fox0"),
    "",
    hireAndFadeIn(0.5,"N_ill_fabled_root_of_yore"),
    "",
    hireUseActor("N_ill_tangent_upper_cover","standard_backdrop_top"),
    hireUseActor("N_ill_tangent_lower_cover","N_ill_tangent_upper_cover"),
    hireAndFadeInUseActor(0.5,"N_ill_tangent","N_ill_tangent_lower_cover"),
    "",
    parallel(
        linear(0.5,"N_ill_tangent_lower_cover","x",-170),
        linear(0.5,"N_ill_tangent_lower_cover","y",165),
        sequence(
            wait(0.25),
            hireAndFadeIn(0.25,"N_ill_x1")
        )
    ),
    fire("N_ill_tangent_lower_cover"),
    "",
    hireAndFadeInUseActors(0.5,"N_ill_df","N_ill_dx"),
    "",
    fadeOutAndFire(0.5,"N_ill_fabled_root_of_yore"),
    hireAndFadeInUseActors(0.5,
        "N_ill_eq_fprime",
        "N_ill_eq_eq",
        "N_ill_eq_frac",
        "N_ill_eq_df",
        "N_ill_eq_dx"
    ),
    "",
    fadeOutAndFire(0.5,"N_ill_eq_df"),
    hireAndFadeInUseActor(0.5,"N_ill_eq_f"),
    "",
    fadeOutAndFire(0.5,"N_ill_eq_dx"),
    hireAndFadeInUseActors(0.5,"N_ill_eq_x0","N_ill_eq_minus","N_ill_eq_x1"),
    "",
    parallel(
        smooth(0.5,"N_ill_eq_fprime","x",171.14),
        smooth(0.5,"N_ill_eq_fprime","y",34.13),
        smooth(0.5,"N_ill_eq_x0","x",-171.14),
        smooth(0.5,"N_ill_eq_x0","y",-24.8),
        smooth(0.5,"N_ill_eq_minus","x",-171.14),
        smooth(0.5,"N_ill_eq_minus","y",-24.8),
        smooth(0.5,"N_ill_eq_x1","x",-171.14),
        smooth(0.5,"N_ill_eq_x1","y",-24.8)
    ),
    "",
    parallel(
        smooth(0.5,"N_ill_eq_eq","x",-60),
        smooth(0.5,"N_ill_eq_x1","x",-60-171.14),
        smooth(0.5,"N_ill_eq_minus","x",105-171.14),
        smooth(0.5,"N_ill_eq_x0","x",100-171.14)
    ),
    "",
    hireAndFadeIn(0.5,"N_ill_next"),
    // }}}
]} // }}}
