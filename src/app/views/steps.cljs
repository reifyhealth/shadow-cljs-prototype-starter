(ns app.views.steps
  (:require
    [clojure.string :as str]
    [reagent.core :as r :refer [atom]]
    [app.summary :as summary]
    ["react-markdown" :as ReactMarkdown]
    ["antd" :refer [Steps Steps.Step]]))

(defn SprintSteps
  [state]
  (let [{:keys [current-step theme]} @state
        steps
        [{:icon (r/as-element [:i.fad.fa-lightbulb-on])
          :on-click #(swap! state assoc :current-step 0)
          :title "Sketch"
          :description "Get primative"}
         {:icon (r/as-element [:i.fad.fa-fill-drip])
          :on-click #(swap! state assoc :current-step 1)
          :title "Design"
          :description "Raise the fidelity"}
         {:icon (r/as-element [:i.fad.fa-projector])
          :on-click #(swap! state assoc :current-step 2)
          :title "Validate"
          :description "Evaluate the artifact"}
         {:icon (r/as-element [:i.fad.fa-compass])
          :on-click #(swap! state assoc :current-step 3)
          :title "Planning"
          :description "Break it on down"}
         {:icon (r/as-element [:i.fad.fa-rabbit-fast])
          :on-click #(swap! state assoc :current-step 4)
          :title "Sprint!"
          :description "True Reification"}]]
    (fn []
      [:div.o-sprint-steps
       [:> Steps {:direction :horizontal
                  :type :navigation
                  :class "o-sprint-steps__steps"
                  :current (:current-step @state)}
        (for [step steps]
          [:> Steps.Step step])]
       [:div.o-sprint-steps__markdown-container
        (case (:current-step @state)
         0 [:> ReactMarkdown {:source summary/sketch}]
         1 [:> ReactMarkdown {:source summary/design}]
         2 [:> ReactMarkdown {:source summary/validate}]
         3 [:> ReactMarkdown {:source summary/planning}]
         4 [:> ReactMarkdown {:source summary/frontend}]
         [:> ReactMarkdown {:source summary/sketch}])]])))
